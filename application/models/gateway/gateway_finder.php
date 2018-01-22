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

    /**
     * Pega a assinatura dos itens
     *
     * @param [type] $user
     * @return void
     */
    public function subscribed( $user ) {
        $this->db->join( 'customer_gateway', 'customer_gateway.gateway_id = gateway.id AND customer_gateway.customer_id = '.$user->id );
        $this->db->where( 'customer_gateway.status = "F" ');
        return $this;
    }
}

/* end of file */