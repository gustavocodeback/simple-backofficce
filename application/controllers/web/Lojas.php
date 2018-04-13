<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lojas extends SG_Controller {

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

        //Detect special conditions devices
        $iPod    = stripos($_SERVER['HTTP_USER_AGENT'],"iPod");
        $iPhone  = stripos($_SERVER['HTTP_USER_AGENT'],"iPhone");
        $iPad    = stripos($_SERVER['HTTP_USER_AGENT'],"iPad");
        $Android = stripos($_SERVER['HTTP_USER_AGENT'],"Android");
        $webOS   = stripos($_SERVER['HTTP_USER_AGENT'],"webOS");

        //do something with this information
        if( $iPod || $iPhone ){
            redirect( 'https://itunes.apple.com/br/app/apple-store/id1351364395' );
            exit();
        }else if($iPad){
            redirect( 'https://itunes.apple.com/br/app/apple-store/id1351364395' );
            exit();
        }else if($Android){
            redirect( 'https://play.google.com/store/apps/details?id=br.com.codeback.simple' );
            exit();
        }else if($webOS){
            redirect( 'https://getsimple.com.br/' );
            exit();
		}else {
            redirect( 'https://getsimple.com.br/' );
            exit();
        }
    }
}

// End of file