<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Report_notice extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		$this->protectIt( admin() );

		// Seta o contexto
		sidebar( 'Notícias denunciadas' );

		// Carrega a model
		$this->load->model( 'report_notice' );
		$this->model = $this->Report_notice;
		
		// Verifica se existe um id
		$id = $this->input->get( 'id' );
		$model = $this->model;
		if ( $id ) {
			if ( $md = $this->model->findById( $id ) ) $model = $md;
		}
		
		// Seta a model do grid
		setItem( 'url', 'report_notice/datatables' );
		setItem( 'modelGrid', $model );
	}

	/**
	 * datatables
	 * 
	 * Volta a tabela
	 *
	 * @return void
	 */
	 public function datatables() {
		
		// Chama o método da datatables
		echo $this->model->DataTables();
	}
	
	/**
	 * list
	 * 
	 * lista os dados
	 *
	 * @return void
	 */
	 public function list() {
		$this->protectIt( 'read' ); 
		setTitle( 'Listagem' );
		
		// Carrega o grid
		view( 'grid/grid' );
	}

	/**
	 * delete
	 * 
	 * deleta um item
	 *
	 * @return void
	 */
	public function delete( $id = false ) {
		$this->protectIt( 'delete' ); 
		
		// carrega a entidade
		$item = $this->model->findById( $id );
		if ( !$item ) close_page( 'home' );

		// deleta o item
		if( $item->delete() ) {

			// Seta a mensagem
			flash( 'swaSuccessBody', 'Item excluido com sucesso' );
		} else {

			// Seta a mensagem
			flash( 'swaErrorBody', 'Erro ao excluir o item' );
		}

		// carrega a view
		close_page( 'report_notice/list' );
	}
}

// End of file
