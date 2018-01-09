<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'notice_finder.php';

/**
 * notice
 * 
 * Model de notice
 * 
 */
class Notice_model extends Notice_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'gateway_id' => 'gateway_id',
  'tittle' => 'tittle',
  'notice_link' => 'notice_link',
  'image_link' => 'image_link',
  'description' => 'description',
  'date' => 'date',
  'shared' => 'shared',
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
      2 => 'tittle',
      3 => 'notice_link',
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
        return 'notice';
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
          'db' => 'tittle',
          'dt' => 2,
        ),
        3 => 
        array (
          'db' => 'notice_link',
          'dt' => 3,
        ),
      );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'notice/delete/'.$d );
                $edit = editButton( 'notice/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'notice/save/'.$this->id : 'notice/save';
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
  'tittle' => 
  array (
    'label' => 'tittle',
    'name' => 'tittle',
    'type' => 'text',
    'rules' => 'trim|required|max_length[120]',
  ),
  'notice_link' => 
  array (
    'label' => 'notice_link',
    'name' => 'notice_link',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'image_link' => 
  array (
    'label' => 'image_link',
    'name' => 'image_link',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'description' => 
  array (
    'label' => 'description',
    'name' => 'description',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'date' => 
  array (
    'label' => 'date',
    'name' => 'date',
    'type' => 'text',
    'rules' => 'trim|required',
  ),
  'shared' => 
  array (
    'label' => 'shared',
    'name' => 'shared',
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