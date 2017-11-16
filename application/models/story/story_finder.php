<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Story_finder
 * 
 * Finder de story
 * 
 */
class Story_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Story_model';

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