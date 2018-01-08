<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Customer_gateway_finder
 * 
 * Finder de customer_gateway
 * 
 */
class Customer_gateway_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Customer_gateway_model';

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