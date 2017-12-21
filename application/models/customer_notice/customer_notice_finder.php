<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Customer_notice_finder
 * 
 * Finder de customer_notice
 * 
 */
class Customer_notice_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Customer_notice_model';

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