<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Suport_finder
 * 
 * Finder de suport
 * 
 */
class Suport_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Suport_model';

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