<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Customer_muted_finder
 * 
 * Finder de customer_muted
 * 
 */
class Customer_muted_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Customer_muted_model';

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
     * Faz a busca pelo gateway
     *
     * @param [type] $id
     * @return void
     */
    public function byGateway( $id ) {
        $this->where( " gateway_id = $id " );
        return $this;
    }

    /**
     * Faz a busca pelo customer
     *
     * @param [type] $id
     * @return void
     */
    public function byCustomer( $id ) {
        $this->where( " customer_id = $id " );
        return $this;
    }
}

/* end of file */