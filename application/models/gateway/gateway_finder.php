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

    /**
     * Verifica se um gateway ja existe
     *
     * @param [type] $feed
     * @return void
     */
    public function exists( $feed ) {
        
        // Seta o where
        $where = [
            'name' => $feed->title,
            'url'  => $feed->siteUrl
        ];
        
        // Busca o gateway
        $query = $this->db->get_where('gateway', $where);
        
        // Seta o resultado
        $result = null;
        foreach ($query->result() as $row) {
                $result = $row;
        }

        if( !$result ) return false;

        // Busca no banco com os dados necessarios
        $gateway = $this->Gateway->findById( $result->id );

        // Retorna o gateway
        return $gateway;
    }
}

/* end of file */