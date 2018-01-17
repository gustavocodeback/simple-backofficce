<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Report_notice_finder
 * 
 * Finder de report_notice
 * 
 */
class Report_notice_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'Report_notice_model';

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