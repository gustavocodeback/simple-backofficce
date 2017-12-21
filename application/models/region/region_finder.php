<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Region_finder
 * 
 * Finder de region
 * 
 */
class Region_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Region_model';

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