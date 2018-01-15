<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Notice extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// carrega a model de noticias
		$this->load->model( 'notice' );
	}

	/**
	 * getNotices
	 * 
	 * pega todas as noticias
	 */
	public function get_notices( $page = 1 ) {

		// busca as noticias
		$notices = $this->Notice->where( "default_notice = 'S'" )
								->order('date', 'DESC')
								->paginate( $page, 10 );

		// verifica se tem noticias
		if( $notices ) {

			// inicializa o array
			$notices_formated = [];

			// percorre as noticias
			foreach( $notices->data as $notice ) {

				// busca o veiculo de noticia
				$veiculo = $notice->belongsTo( 'gateway' );

				// busca a imagem do veiculo de noticia
				$image = $veiculo->belongsTo( 'midia' );

				// Verifica se a noticia foi salva para ler dps
				$saveForLater = false;
				$user = ( auth() ) ? auth() : false;
				if( $user ) $saveForLater = $notice->status( $user );

				// formata a url
				$url = str_replace( ['http://', 'https://'], '' ,$veiculo->url );
				$url = trim( $url, '/' );

				// formata as informações
				$notices_formated[] = [
					'id'             => $notice->id,
					'title'          => $notice->title,
					'notice_link'    => $notice->notice_link,
					'image_link'     => $notice->image_link,
					'description'    => $notice->description,
					'created'        => toHumanReadable($notice->date ),
					'gateway_name'   => $veiculo->name,
					'gateway_image'  => $image->path(),
					'gateway_id'     => $notice->gateway_id,
					'gateway_url'    => $url,
					'save_for_later' => ($saveForLater) ? 'T' : 'F'
				];
			}
			$notices->data = $notices_formated;
			return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Salva uma noticia para ler mais tarde
	 * 
	 */
	public function save_for_later( $notice_id ) {
		loggedOnly();

		// Verifica se tem a noticia
		if( $notice = $this->Notice->findById( $notice_id ) ) {

			// Tenta salvar para mais tarde
			if( $notice->saveForLater( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'A noticia informada não existe' );
	}

	/**
	 * Tira a noticia da lista para ler mais tarde
	 * 
	 */
	public function unsave_for_later( $notice_id ) {
		loggedOnly();
		
		// Busca a noticia
		if ( $notice = $this->Notice->findById( $notice_id ) ) {

			// Seta o unsave
			if ( $notice->unsaveForLater( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'A noticia informada não existe' );
	}
}

// End of file
