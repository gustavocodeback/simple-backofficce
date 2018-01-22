<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Gateway_personal_category_finder
 * 
 * Finder de gateway_personal_category
 * 
 */
class Gateway_personal_category_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Gateway_personal_category_model';

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