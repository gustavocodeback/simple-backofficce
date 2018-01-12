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

				// formata as informações
				$notices_formated[] = [
					'id'            => $notice->id,
					'title'         => $notice->title,
					'notice_link'   => $notice->notice_link,
					'image_link'    => $notice->image_link,
					'description'   => $notice->description,
					'created'       => date( 'd/m/Y H:i:s', strtotime( $notice->date ) ),
					'gateway_name'  => $veiculo->name,
					'gateway_image' => $image->path(),
					'gateway_id'    => $notice->gateway_id,
				];
			}
			$notices->data = $notices_formated;
			return resolve( $notices );
		} else return reject( false );
	}
}

// End of file
