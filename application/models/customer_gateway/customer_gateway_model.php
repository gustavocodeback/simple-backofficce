<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'customer_gateway_finder.php';

/**
 * customer_gateway
 * 
 * Model de customer_gateway
 * 
 */
class Customer_gateway_model extends Customer_gateway_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'customer_id'           => 'customer_id',
        'gateway_id'            => 'gateway_id',
        'personal_category_id'  => 'personal_category_id',
        'status'                => 'status',
        'created_at'            => 'created_at',
        'updated_at'            => 'updated_at',
    );

    /**
     * visibles
     * 
     * Campos visiveis no grid
     *
     * @var array
     */
    public $visibles = array (
        'ID',
        'customer_id',
        'gateway_id',
        'status',
        'Ações',
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
        return 'customer_gateway';
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
            array (
                'db' => 'id',
                'dt' => 0,
            ),
            array (
                'db' => 'customer_id',
                'dt' => 1,
            ),
            array (
                'db' => 'gateway_id',
                'dt' => 2,
            ),
            array (
                'db' => 'status',
                'dt' => 3,
            ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'customer_gateway/delete/'.$d );
                $edit = editButton( 'customer_gateway/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'customer_gateway/save/'.$this->id : 'customer_gateway/save';
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
                'gateway_id' => 
                array (
                    'label' => 'gateway_id',
                    'name' => 'gateway_id',
                    'type' => 'number',
                    'rules' => 'trim|required|max_length[11]|integer',
                ),
                'status' => 
                array (
                    'label' => 'status',
                    'name' => 'status',
                    'type' => 'char',
                    'rules' => 'trim|required|max_length[1]|integer',
                )
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