<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'comment_finder.php';

/**
 * comment
 * 
 * Model de comment
 * 
 */
class Comment_model extends Comment_finder {

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
  'text' => 'text',
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
        return 'comment';
    }
}

/* end of file */