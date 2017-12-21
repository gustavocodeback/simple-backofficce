<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'customer_finder.php';

/**
 * customer
 * 
 * Model de customer
 * 
 */
class Customer_model extends Customer_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'user_id' => 'user_id',
  'region_id' => 'region_id',
  'photo' => 'photo',
  'platform' => 'platform',
  'key_phone' => 'key_phone',
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
  1 => 'user_id',
  2 => 'region_id',
  3 => 'photo',
  4 => 'Ações',
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
        return 'customer';
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
     * columns
     * 
     * Colunas para o DataTables
     *
     * @return void
     */
    public function DataTables() {
        
        // Carrega a library
        $this->load->library( 'DataTables' );

        // Columns
        $columns = array (
  0 => 
  array (
    'db' => 'id',
    'dt' => 0,
  ),
  1 => 
  array (
    'db' => 'user_id',
    'dt' => 1,
  ),
  2 => 
  array (
    'db' => 'region_id',
    'dt' => 2,
  ),
  3 => 
  array (
    'db' => 'photo',
    'dt' => 3,
  ),
);
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'customer/delete/'.$d );
                $edit = editButton( 'customer/list?addModal=true&id='.$d );

                // Volta os botões
                return $del.'&nbsp'.$edit;
            }
        ];

        // Volta o resultado
        return $this->datatables->send( $this->table(), $columns );
    }
    
    /**
     * form
     * 
     * Form de inserção
     *
     * @return void
     */
    public function form( $key ) {
        $url = $this->id ? 'customer/save/'.$this->id : 'customer/save';
        $data = [
            'url'    => $url,
            'fields' => array (
  'user_id' => 
  array (
    'label' => 'user_id',
    'name' => 'user_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'region_id' => 
  array (
    'label' => 'region_id',
    'name' => 'region_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'photo' => 
  array (
    'label' => 'photo',
    'name' => 'photo',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'platform' => 
  array (
    'label' => 'platform',
    'name' => 'platform',
    'type' => 'text',
    'rules' => 'trim|required|max_length[30]',
  ),
  'key_phone' => 
  array (
    'label' => 'key_phone',
    'name' => 'key_phone',
    'type' => 'text',
    'rules' => 'trim|required',
  ),
)
        ];
        return $data[$key];
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
}

// End of file