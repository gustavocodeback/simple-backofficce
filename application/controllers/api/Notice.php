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
	 * Formata as noticias no formato de saida
	 * 
	 */
	private function __formatNotices( $notices ) {
		
		// inicializa o array
		$notices_formated = [];
		
		// percorre as noticias
		foreach( $notices as $notice ) {

			// busca o veiculo de noticia
			$veiculo = $notice->belongsTo( 'gateway' );

			// busca a imagem do veiculo de noticia
			$image = $veiculo->belongsTo( 'midia' );

			// Verifica se a noticia foi salva para ler dps
			$saveForLater = $reported = false;
			if( auth() ){
				$saveForLater = $notice->status( auth() );
				$reported = ( $notice->reported( auth() ) ) ? true : false ;
			}

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
				'save_for_later' => ($saveForLater) ? 'T' : 'F',
				'reported'       => $reported
			];
		}
		return $notices_formated;
	}

	/**
	 * Pega todas as noticias
	 */
	public function get_notices( $page = 1 ) {
		$user = auth();

		// Pega as categorias enviadas
		$categories = $this->input->post( 'categories_ids' );

		// Faz a busca das noticias
		$notices = $this->Notice->select( 'n.*' )
								->lastPublished();
		
		// Verifica se existem categorias de busca
		if ( is_array( $categories ) && count( $categories ) > 0 ) {
			$notices = $notices->inCategories( $categories );
		}

		// Verifica se existe um usuário
		if ( $user ) $notices = $notices->subscribed( $user );

		// Busca as noticias
		$notices = $notices->paginate( $page, 10, 'notice n' );
		
		// verifica se tem noticias
		if( $notices ) {
			$notices->data = $this->__formatNotices( $notices->data );
			return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Pega as noticias de um veiculo
	 */
	public function get_gateway_notices( $gateway_id, $page = 1 ) {

		// Busca as noticias
		$notices = $this->Notice->where( "gateway_id = ".$gateway_id )
								->order('date', 'DESC')
								->paginate( $page, 10 );

		// Verifica se retornou alguma noticia
		if( $notices ) {
			$notices->data = $this->__formatNotices( $notices->data );
			return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Pega as noticias salvas
	 */
	public function get_saved_notices( $page = 1 ) {
		loggedOnly();

		// Carrega a model
		$this->load->model( 'customer_notice' );

		// Busca as relações
		$savedNotices = $this->Customer_notice->getSavedNotices( auth(), $page );

		// Inicia o array de noticias
		$notices = [];

		// Percorre as noticias salvas
		foreach( $savedNotices->data as $savedNotice ) {
			
			// Busca as noticias
			$notices[] = $this->Notice->findById( $savedNotice->notice_id );
		}

		// Verifica se tem noticias
		if( $notices ) {

			// Formata os dados
			$savedNotices->data = $this->__formatNotices( $notices );

			// Retorna as noticias salvas
			return resolve( $savedNotices );

		// Quando nao tem noticia
		} else return reject( false );
	}

	/**
	 * Salva uma noticia para ler mais tarde
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

	/**
	 * Denuncia o veiculo
	 */
	public function report( $notice_id ) {
		loggedOnly();

		// Busca o veiculo
		if( $notice = $this->Notice->findById( $notice_id ) ) {

			// Seta a denuncia
			if( $notice->report( auth() ) ) {
				return resolve( 'Açaõ realizada com sucesso' );
			} else reject( 'Não foi possivel realizar a ação' );
		} else reject( 'O Gateway informado não existe' );
	}

	/**
	 * Faz a busca das noticias pelo titulo
	 */
	public function search_notice( $string, $page = 1 ) {
		
		// Busca os registros
		$notices = $this->Notice->where( 'title LIKE "%'.$string.'%"' )
								->order('date', 'DESC')
								->paginate( $page, 10 );

		// verifica se tem noticias
		if( $notices ) {
		$notices->data = $this->__formatNotices( $notices->data );
		return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Pega uma noticia pelo ID
	 *
	 * @param [type] $notice_id
	 * @return void
	 */
	public function get( $notice_id ) {
		$notice = $this->Notice->findById( $notice_id );
		if ( !$notice ) reject( 'Nenhuma notícia encontrada' );

		// Verifica se existe um texto
		$text_parts = [];
		if ( $notice->text ) {
			$text_parts = preg_split( '/\n|\r\n?/', $notice->text );
			$text_parts = array_filter( $text_parts, function( $item ) {
				return ( strlen( trim( $item ) ) > 0 ) ? true : false;	
			});
			$text_parts = array_map( function( $value ) {
				return trim( $value );
			}, $text_parts );
			$text_parts = array_values( $text_parts );
		}

		// Verifica se a noticia foi salva para ler dps
		$saveForLater = $reported = false;
		if( auth() ){
			$saveForLater = $notice->status( auth() );
			$reported     = ( $notice->reported( auth() ) ) ? true : false ;
		}

		// Formata o JSON
		$data = [
			'id'             => $notice->id,
			'title'          => $notice->title,
			'link'           => $notice->notice_link,
			'description'    => $notice->description,
			'text_parts'     => $text_parts,
			'cover' 	     => $notice->image_link,
			'published'      => toHumanReadable( $notice->date ),
			'save_for_later' => ($saveForLater) ? 'T' : 'F',
			'reported'       => $reported
		];

		// Envia os dados
		resolve( $data );
	}
}

// End of file
