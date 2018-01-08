<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Gateway_finder
 * 
 * Finder de gateway
 * 
 */
class Gateway_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Gateway_model';

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