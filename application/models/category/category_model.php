<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'category_finder.php';

/**
 * category
 * 
 * Model de category
 * 
 */
class Category_model extends Category_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'midia_id' => 'midia_id',
        'name' => 'name',
        'slug' => 'slug',
        'description' => 'description',
        'status' => 'status',
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
        return 'category';
    }

    /**
     * midia
     * 
     * carrega o arquivo de midia
     * 
     */
    public function midia() {

        // verifica se existe um id
        if ( !$this->midia_id ) return null;

        // carrega a model
        $this->load->model( 'midia' );

        // carrega a midia
        return $this->Midia->findById( $this->midia_id );
    }
}

/* end of file */