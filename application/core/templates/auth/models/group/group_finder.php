<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Group_finder
 * 
 * Finder de group
 * 
 */
class Group_finder extends SG_Model {

    /**
     * default
     *
     * grupo padrao
     * 
     * @var string
     */
    public $default = 'admin';
    
    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Group_model';

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
     * slug
     * 
     * busca um grupo pelo slug
     *
     * @param [type] $slug
     * @return void
     */
    public function slug( $slug ) {
        return $this->where( " slug = '$slug' " )->findOne();
    }

    /**
     * defaultGroup
     * 
     * pega o grupo padrao
     *
     * @return void
     */
    public function defaultGroup() {
        return $this->where( " slug = '$this->default' " )->findOne();
    }
}

/* end of file */