<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Character_finder
 * 
 * Finder de character
 * 
 */
class Character_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Character_model';

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