<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * View_finder
 * 
 * Finder de view
 * 
 */
class View_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'View_model';

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