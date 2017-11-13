<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Routine_finder
 * 
 * Finder de routine
 * 
 */
class Routine_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Routine_model';

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
     * findBySlug
     *
     * pega a rotina pelo seu slug
     * 
     * @param string $slug
     * @return void
     */
    public function findBySlug( string $slug ) {
        return $this->where( " slug = '$slug' " )->findOne();
    }
}

/* end of file */