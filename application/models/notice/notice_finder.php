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
        if( strpos( $link, "'" ) ) {
            $link = str_replace( "'", "\'", $link );
        }
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
        
        // Verifica se deve adicionar o filtro
        if ( !is_array( $categories ) || count( $categories ) == 0 ) return $this;

        // Adiciona o filtro
        $this->db->join( 'gateway g', 'g.id = n.gateway_id ', 'inner')
                 ->join( 'category c', 'c.id = g.category_id ', 'inner' )
                 ->where_in( 'c.id', $categories );
        return $this;
    }

    /**
     * Busca as noticias com categoria pessoal
     *
     * @param [type] $user
     * @return void
     */
    public function findPersonalFeed( $feedPessoalId, $user ) {

        // Faz o join
        $this->db->join( 'customer_gateway cg', "cg.gateway_id = n.gateway_id" );
        $this->db->where( " cg.personal_category_id = $feedPessoalId 
                            AND customer_id = $user->id" );

        // Retorna os follows
        return $this;
    }

    /**
     * remove as noticias que possuem categoria pessoal
     *
     * @param [type] $user
     * @return void
     */
     public function removePersonal() {        
        $this->db->where( "( cg.personal_category_id IS NULL OR cg.personal_category_id = 0 ) " );

        // Retorna os follows
        return $this;
    }

    /**
     * Pega a assinatura dos itens
     *
     * @param [type] $user
     * @return void
     */
    public function subscribed( $user ) {
        $this->db->join( 'customer_gateway cg', 'cg.gateway_id = n.gateway_id AND customer_id = '.$user->id );
        $this->db->where( 'cg.status = "F" ');
        return $this;
    }

    /**
     * Pega as noticias dos veiculos não silenciados
     *
     * @param [type] $user
     * @return void
     */
    public function notSilenced( $user ) {
        $this->db->join( 'customer_muted mt', 'mt.gateway_id = n.gateway_id AND mt.customer_id = '.$user->id, 'inner' );
        return $this;
    }

    /**
     * Faz o join com a tabela de gateways
     *
     * @param [type] $alias
     * @return void
     */
    public function joinGateway( $alias ) {
        $this->db->join( " gateway $alias", " n.gateway_id = $alias.id ", "inner" );
        return $this;
    }
}

/* end of file */