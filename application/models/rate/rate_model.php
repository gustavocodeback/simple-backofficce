<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'rate_finder.php';

/**
 * rate
 * 
 * Model de rate
 * 
 */
class Rate_model extends Rate_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'story_id' => 'story_id',
  'user_id' => 'user_id',
  'value' => 'value',
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
        return 'rate';
    }
}

/* end of file */