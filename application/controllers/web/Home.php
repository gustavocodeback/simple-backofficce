<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

		// Seta o contexto
		context( 'home' );

		// Seta a navbar
		navbar( 'Inicio' );

		$this->load->library( 'DataTables' );
		$this->datatables;
	}
	
	/**
	 * index
	 * 
	 * método inicial
	 *
	 * @return void
	 */
	public function index() {
		setTitle( 'Inicio' );

		// Seta a model do grid
		$this->load->model( 'component' );
		setItem( 'modelGrid', $this->Component );

		// Carrega o grid
		view( 'grid/grid' );
	}

	/**
	 * modo_de_edicao
	 * 
	 * Habilita o modo de edição
	 *
	 * @return void
	 */
	public function modo_de_edicao() {
		loggedOnly();

		// Pega a url de redirect
		$url = $this->input->get( 'redirect' );
		$url = $url ? $url : 'home';

		// Verifica se está no modo de edição
		if ( editMode() ) {
			disableEditMode();
		} else enableEditMode();

		// redireciona para a url
		close_page( $url );
	}

	public function datatables() {

		// Carrega a model
		$this->load->model( 'component' );

		// Chama o método da datatables
		echo $this->Component->DataTables();
	}
}

// End of file
