<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Notice_finder
 * 
 * Finder de notice
 * 
 */
class Notice_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Notice_model';

    /**
     * __construct
     * 
     * Método construtor
     * 
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Pega uma noticia pelo link
     *
     * @param [type] $link
     * @return void
     */
    public function getByLink( $link ) {
        return $this->where( "notice_link = '$link'" )->findOne();
    }
}

/* end of file */