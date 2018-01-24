<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'suport_finder.php';

/**
 * suport
 * 
 * Model de suport
 * 
 */
class Suport_model extends Suport_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'customer_id' => 'customer_id',
  'subject' => 'subject',
  'message' => 'message',
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
  1 => 'customer_id',
  2 => 'subject',
  3 => 'message',
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
        return 'suport';
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
    'db' => 'customer_id',
    'dt' => 1,
  ),
  2 => 
  array (
    'db' => 'subject',
    'dt' => 2,
  ),
  3 => 
  array (
    'db' => 'message',
    'dt' => 3,
  ),
);
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'suport/delete/'.$d );
                $edit = editButton( 'suport/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'suport/save/'.$this->id : 'suport/save';
        $data = [
            'url'    => $url,
            'fields' => array (
  'customer_id' => 
  array (
    'label' => 'customer_id',
    'name' => 'customer_id',
    'type' => 'number',
    'rules' => 'trim|required|max_length[11]|integer',
  ),
  'subject' => 
  array (
    'label' => 'subject',
    'name' => 'subject',
    'type' => 'text',
    'rules' => 'trim|required|max_length[255]',
  ),
  'message' => 
  array (
    'label' => 'message',
    'name' => 'message',
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