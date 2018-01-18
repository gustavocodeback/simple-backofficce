<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Report_gateway_finder
 * 
 * Finder de report_gateway
 * 
 */
class Report_gateway_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Report_gateway_model';

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