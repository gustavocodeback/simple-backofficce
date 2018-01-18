<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Notice_finder
 * 
 * Finder de notice
 * 
 */
class Notice_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Notice_model';

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
     * Pega uma noticia pelo link
     *
     * @param [type] $link
     * @return void
     */
    public function getByLink( $link ) {
        return $this->where( "notice_link = '$link'" )->findOne();
    }

    /**
     * Pega apenas veiculos de pesquisa padrão
     *
     * @param string $alias
     * @return void
     */
    public function default( $alias = '') {
        $this->where( " $alias.default_gateway = 'S' " );
        return $this;
    }

    /**
     * Ordena pela data de publicação
     *
     * @return void
     */
    public function lastPublished() {
        $this->order( "date", "DESC" );
        return $this;
    }

    /**
     * Seleciona os campos especificos
     *
     * @param [type] $str
     * @return void
     */
    public function select( $str ) {
        $this->db->select( $str );
        return $this;
    }

    /**
     * Define as categorias permitidas
     *
     * @param [type] $categories
     * @return void
     */
    public function inCategories( $categories ) {
        $this->db->join( 'gateway g', 'g.id = n.gateway_id ', 'inner')
                 ->join( 'category c', 'c.id = g.category_id ', 'inner' )
                 ->where_in( 'c.id', $categories );
        return $this;
    }

    public function subscribed( $user ) {
        $this->db->join( 'customer_gateway cg', 'cg.gateway_id = n.gateway_id && customer_id = '.$user->id );
        $this->db->where( 'cg.status = "F" ');
        return $this;
    }
}

/* end of file */