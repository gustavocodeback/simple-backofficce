<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'message_finder.php';

/**
 * message
 * 
 * Model de message
 * 
 */
class Message_model extends Message_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'story_id' => 'story_id',
  'character_id' => 'character_id',
  'midia_id' => 'midia_id',
  'type' => 'type',
  'text_en' => 'text_en',
  'text_pt' => 'text_pt',
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
        return 'message';
    }
}

/* end of file */