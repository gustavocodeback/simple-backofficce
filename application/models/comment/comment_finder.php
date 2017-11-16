<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Comment_finder
 * 
 * Finder de comment
 * 
 */
class Comment_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Comment_model';

    /**
     * __construct
     * 
     * Método construtor
     * 
     */
    public function __construct() {
        parent::__construct();
    }
}

/* end of file */