<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'routine_finder.php';

/**
 * routine
 * 
 * Model de routine
 * 
 */
class Routine_model extends Routine_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'name' => 'name',
  'slug' => 'slug',
  'updated_at' => 'updated_at',
  'created_at' => 'created_at',
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
        return 'routine';
    }
}

/* end of file */