<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'gateway_personal_category_finder.php';

/**
 * gateway_personal_category
 * 
 * Model de gateway_personal_category
 * 
 */
class Gateway_personal_category_model extends Gateway_personal_category_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'gateway_id' => 'gateway_id',
  'personal_category_id' => 'personal_category_id',
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
  1 => 'gateway_id',
  2 => 'personal_category_id',
  3 => 'Ações',
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
        return 'gateway_personal_category';
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
    'db' => 'gateway_id',
    'dt' => 1,
  ),
  2 => 
  array (
    'db' => 'personal_category_id',
    'dt' => 2,
  ),
);
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 3,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'gateway_personal_category/delete/'.$d );
                $edit = editButton( 'gateway_personal_category/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'gateway_personal_category/save/'.$this->id : 'gateway_personal_category/save';
        $data = [
            'url'    => $url,
            'fields' => array (
  'gateway_id' => 
  array (
    'label' => 'gateway_id',
    'name' => 'gateway_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'personal_category_id' => 
  array (
    'label' => 'personal_category_id',
    'name' => 'personal_category_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
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