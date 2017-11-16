<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'story_finder.php';

/**
 * story
 * 
 * Model de story
 * 
 */
class Story_model extends Story_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'user_id' => 'user_id',
        'midia_id' => 'midia_id',
        'category_id' => 'category_id',
        'title' => 'title',
        'description' => 'description',
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
        return 'story';
    }
}

/* end of file */