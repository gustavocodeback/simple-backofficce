<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'character_finder.php';

/**
 * character
 * 
 * Model de character
 * 
 */
class Character_model extends Character_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'story_id' => 'story_id',
  'midia_id' => 'midia_id',
  'name' => 'name',
  'age' => 'age',
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
        return 'character';
    }
}

/* end of file */