<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Category_finder
 * 
 * Finder de category
 * 
 */
class Category_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Category_model';

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