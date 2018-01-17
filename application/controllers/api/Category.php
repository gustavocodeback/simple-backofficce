<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Controller para os métodos de categorias
 * 
 */
class Category extends SG_Controller {

	/**
	 * Model de categorias
	 * 
	 */
	public $model;

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// Carrega a model
		$this->load->model( 'category' );
		$this->model = $this->Category;
	}
	
	/**
	 * Pega todas as categorias
	 *
	 * @return void
	 */
	public function list() {
		
		// Pega os itens
		$itens = $this->model->find();
		$itens = $itens ? $itens : [];

		// Seta formatada
		$formatted = [];
		foreach( $itens as $item ) {

			// Pega a midia da categoria
			$midia = $item->belongsTo( 'midia' );

			// Formata os itens
			$formatted[] = [
				'id'    => $item->id,
				'name'  => $item->name,
				'midia' => $midia->path()
			];
		}

		// Envia as categorias
		resolve( $formatted );
	}

	/**
	 * Volta a ultima data de atualizacao
	 * das categorias
	 *
	 * @return void
	 */
	public function last_update() {
		
		// Pega a categoria mais nova
		$newerCategory = $this->model->newer()->findOne();
		if ( !$newerCategory ) return resolve( false );
		$tsNewer = strtotime( $newerCategory->created_at );

		// Pega a categoria atualizada mais recentemente
		$lastUpdatedCategory = $this->model->last_updated()->findOne();
		if ( !$lastUpdatedCategory ) return resolve( $tsNewer );
		$tsLastUpdated = strtotime( $lastUpdatedCategory->updated_at  );

		// Verifica qual o mais recente
		if ( ( $tsNewer - $tsLastUpdated ) > 0 ) {
			return resolve( $tsNewer );
		} else {
			return reject( $tsLastUpdated );
		}
	}
}

// End of file
