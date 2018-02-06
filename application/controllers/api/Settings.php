<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Settings extends SG_Controller {

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
	
	/*
	 * Busca os settings pela key
	 *
	 */
	public function get_terms( $key ) {
		// Pega os termos
		$settings = $this->settings->get( $key );
		$settings = $settings ? $settings : '';
		return resolve( $settings );
	}

	/*
	 * Busca a tradução
	 *
	 */
	public function get_category() {

		// Pega as regioe
		$regions = $this->input->post( 'regions' );

		// Busca a tradução
		$translate = [];
		foreach( $regions as $region ) {
			$settings = $this->settings->getBySlug( $region['sigla'] );
			$translate[$region['sigla']] = $settings ? $settings : [];
		}
		return resolve( $translate );
	}

	/*
	 * Busca um item pelo slug
	 *
	 */
	public function get_by_slug( $slug ) {
		$settings = $this->settings->getBySlug( $slug );
		$settings = $settings ? $settings : [];
		return resolve( $settings );
	}
}

// End of file
