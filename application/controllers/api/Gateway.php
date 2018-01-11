<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gateway extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

		// carrega a model de veiculos de noticias
		$this->load->model( 'gateway' );
	}
	
	/**
	 * get_gateway_byid
	 *
	 * retorna um veiculo de noticia pelo id
	 */
	public function get_gateway_byid( $id ) {

		// busca o veiculo pelo id
		$gateway = $this->Gateway->findById( $id );

		// verifica se veio veiculo
		if( $gateway ) {

			// busca a imagem e acategoria
			$image = $gateway->belongsTo( 'midia' );
			$category = $gateway->belongsTo( 'category' );

			// formata os dados
			$gateway_data = [
				'id' => $gateway->id,
				'name' => $gateway->name,
				'url' => $gateway->url,
				'image' => $image->path(),
				'category' => $category->name
			];

			return resolve( $gateway_data );
		} else {
			return reject( 'O veículo desejado não existe.' );
		}
	}
}

// End of file
