<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'personal_category_finder.php';

/**
 * personal_category
 * 
 * Model de personal_category
 * 
 */
class Personal_category_model extends Personal_category_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'name'       => 'name',
        'user_id'    => 'user_id',
        'created_at' => 'created_at',
        'updated_at' => 'updated_at',
    );

    /**
     * visibles
     * 
     * Campos visiveis no grid
     *
     * @var array
     */
    public $visibles = array (
        0 => 'ID',
        1 => 'Nome',
        2 => 'User_id',
        2 => 'Ações',
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
     * Volta os metodos
     * 
     */
    public function parse() {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'user_id'    => $this->user_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

    /**
     * table
     *
     * pega a tabela
     * 
     * @return void
     */
    public function table() {
        return 'personal_category';
    }

    /**
     * main
     * 
     * Pega o campo principal
     *
     * @return void
     */
    public function main() {
        return $this->id;
    }

    /**
     * permissions
     * 
     * Volta o array de permissões
     *
     * @return Array
     */
    public function permissions() {
        return [
            'add'    => [ 'any' ],
            'edit'   => [ 'any' ],
            'delete' => [ 'any' ],
            'read'   => [ 'any' ]
        ];
    }

    /**
     * Verifica se a categoria pessoal tem inscricoes
     *
     * @return Array
     */
    public function hasSubscriptions() {
        
        // Prepara a busca
        $this->db->from( 'customer_gateway' )
        ->select( 'id' )
        ->where( " personal_category_id = $this->id " );

        // Faz a busca
        $d = $this->db->get();

        // Verifica se existem inscricoes
        return $d->num_rows() > 0 ? true : false;
    }  
}

// End of file