<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Suport extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// Carrega o model de suporte
		$this->load->model( 'suport' );
	}

	/**
	 * Salva a mensagem de suporte
	 */
	public function save() {

		// Cria uma nova mensagem
		$suport = $this->Suport->new();
		$suport->fill( $this->input->post() );

		// Seta o usuario logado
		$suport->customer_id = ( $user = auth() ) ? $user->id : '';
		
		// Tenta salvar
		if( $suport->save() ) {
			return resolve( 'Ação realizada com sucesso' );
		} else return reject( 'Não foi possivel realizar a ação' );
	}
}

// End of file
