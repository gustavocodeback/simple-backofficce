<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'report_notice_finder.php';

/**
 * report_notice
 * 
 * Model de report_notice
 * 
 */
class Report_notice_model extends Report_notice_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'customer_id' => 'customer_id',
  'notice_id' => 'notice_id',
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
  1 => 'customer_id',
  2 => 'notice_id',
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
        return 'report_notice';
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
    'db' => 'notice_id',
    'dt' => 2,
  ),
);
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 3,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'report_notice/delete/'.$d );
                $edit = editButton( 'report_notice/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'report_notice/save/'.$this->id : 'report_notice/save';
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
  'notice_id' => 
  array (
    'label' => 'notice_id',
    'name' => 'notice_id',
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