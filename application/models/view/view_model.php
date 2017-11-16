<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'view_finder.php';

/**
 * view
 * 
 * Model de view
 * 
 */
class View_model extends View_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'user_id' => 'user_id',
  'story_id' => 'story_id',
  'created_at' => 'created_at',
  'update_at' => 'update_at',
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
        return 'view';
    }
}

/* end of file */