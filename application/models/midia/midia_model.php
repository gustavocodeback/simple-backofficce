<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'midia_finder.php';

/**
 * midia
 * 
 * Model de midia
 * 
 */
class Midia_model extends Midia_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'name' => 'name',
        'path' => 'path',
        'type' => 'type',
        'created_at' => 'created_at',
        'updated_at' => 'updated_at',
    );

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
     * table
     *
     * pega a tabela
     * 
     * @return void
     */
    public function table() {
        return 'midia';
    }
}

/* end of file */