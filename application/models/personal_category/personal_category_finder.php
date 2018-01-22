<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Personal_category_finder
 * 
 * Finder de personal_category
 * 
 */
class Personal_category_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Personal_category_model';

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
     * Pega as categorias de um usuário
     *
     * @param [type] $user
     * @return void
     */
    public function byUser( $user ) {
        return $this->where( " user_id = ".$user->id )->find();
    }
}

/* end of file */