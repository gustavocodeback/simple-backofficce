<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'region_finder.php';

/**
 * region
 * 
 * Model de region
 * 
 */
class Region_model extends Region_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'name'       => 'name',
        'sigla'      => 'sigla',
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
        'ID',
        'Nome',
        'Sigla',
        'Ações'
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
        return 'region';
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
                'db' => 'name',
                'dt' => 1,
            ),
            array (
                'db' => 'sigla',
                'dt' => 2,
            ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 3,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'region/delete/'.$d );
                $edit = editButton( 'region/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'region/save/'.$this->id : 'region/save';
        $data = [
            'url'    => $url,
            'fields' => array (
                'name' => array (
                    'label' => 'Nome',
                    'name' => 'name',
                    'type' => 'text',
                    'rules' => 'trim|required|max_length[60]',
                ),
                'sigla' =>  array (
                    'label' => 'Sigla',
                    'name' => 'sigla',
                    'type' => 'text',
                    'rules' => 'trim|required|max_length[4]',
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