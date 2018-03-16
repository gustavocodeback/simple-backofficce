<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sync extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();
	}

	/**
	 * Pega a ultima atualizacao de uma model
	 *
	 * @param [type] $model
	 * @return void
	 */
	public function __lastUpdated( $model ) {
			
		// Pega a categoria mais nova
		$newer = $model->newer()->findOne();
		if ( !$newer ) return false;
		$tsNewer = strtotime( $newer->created_at );

		// Pega a categoria atualizada mais recentemente
		$lastUpdated = $model->last_updated()->findOne();
		if ( !$lastUpdated ) return $tsNewer;
		$tsLastUpdated = strtotime( $lastUpdated->updated_at  );

		// Verifica qual o mais recente
		return ( ( $tsNewer - $tsLastUpdated ) > 0 ) ? $tsNewer : $tsLastUpdated;
	}
	
	/**
	 * Pega a ultima data de atualização
	 *
	 * @return void
	 */
	public function get_date_update() {
		
		// Carrega as models
		$this->load->model( [ 'category', 'region' ] );

		// Pega o timestamp
		$ts1 = $this->__lastUpdated( $this->Category );
		$ts2 = $this->__lastUpdated( $this->Region );

		// Volta o maior
		resolve( ( $ts1 > $ts2 ) ? $ts1 : $ts2 );
	}

	/**
	 * Lista os dados a serem sincronizados
	 *
	 * @return void
	 */
	public function get_data_to_sync() {

		// Carrega as models
		$this->load->model( [ 'category', 'region' ] );

		// Pega os dados
		$regions    = $this->Region->find();
		$categories = $this->Category->asc()->find();

		// Seta as regioes formatada
		$formattedRegions = [];
		foreach( $regions as $item ) {

			// Formata os itens
			$formattedRegions[] = [
				'name'  => $item->name,
				'sigla' => $item->sigla,
			];
		}

		// Seta as cateogorias formatada
		$formattedCategories = [];
		foreach( $categories as $item ) {

			// Pega a midia da categoria
			$midia = $item->belongsTo( 'midia' );

			// Formata os itens
			$formattedCategories[] = [
				'id'    => $item->id,
				'name'  => $item->name,
				'midia' => $midia ? $midia->path() : base_url( 'public/images/empty.jpg' )
			];
		}

		// Volta os dados para atualizar
		$data = [
			'timestamp'  => time(),
			'regions'    => $formattedRegions,
			'categories' => $formattedCategories
		];
		resolve( $data );
	}
}

// End of file
