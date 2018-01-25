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
}

// End of file
