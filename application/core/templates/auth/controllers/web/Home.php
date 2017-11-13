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
	}
	
	/**
	 * index
	 * 
	 * método inicial
	 *
	 * @return void
	 */
	public function index() {
		$this->view->render( 'home' );
	}
}

/* end of file */
