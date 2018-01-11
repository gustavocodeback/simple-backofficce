<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Personal_category_finder
 * 
 * Finder de personal_category
 * 
 */
class Personal_category_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Personal_category_model';

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