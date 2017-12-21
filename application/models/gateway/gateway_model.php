<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'gateway_finder.php';

/**
 * gateway
 * 
 * Model de gateway
 * 
 */
class Gateway_model extends Gateway_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'region_id' => 'region_id',
  'category_id' => 'category_id',
  'name' => 'name',
  'image' => 'image',
  'rss' => 'rss',
  'default' => 'default',
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
  1 => 'region_id',
  2 => 'category_id',
  3 => 'name',
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
        return 'gateway';
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
    'db' => 'region_id',
    'dt' => 1,
  ),
  2 => 
  array (
    'db' => 'category_id',
    'dt' => 2,
  ),
  3 => 
  array (
    'db' => 'name',
    'dt' => 3,
  ),
);
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'gateway/delete/'.$d );
                $edit = editButton( 'gateway/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'gateway/save/'.$this->id : 'gateway/save';
        $data = [
            'url'    => $url,
            'fields' => array (
  'region_id' => 
  array (
    'label' => 'region_id',
    'name' => 'region_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'category_id' => 
  array (
    'label' => 'category_id',
    'name' => 'category_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'name' => 
  array (
    'label' => 'name',
    'name' => 'name',
    'type' => 'text',
    'rules' => 'trim|required|max_length[60]',
  ),
  'image' => 
  array (
    'label' => 'image',
    'name' => 'image',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'rss' => 
  array (
    'label' => 'rss',
    'name' => 'rss',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'default' => 
  array (
    'label' => 'default',
    'name' => 'default',
    'type' => 'text',
    'rules' => 'trim|required|max_length[1]',
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