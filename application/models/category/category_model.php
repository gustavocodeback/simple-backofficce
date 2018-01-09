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
        'name' => 'name',
        'image' => 'image',
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
        2 => 'Foto',
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
        return 'category';
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
        2 => 
            array (
                'db' => 'image',
                'dt' => 2,
                'formatter' => function( $d, $row ) {
                    return "<img src='$d' width='100px'>";
                }
            ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 3,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'category/delete/'.$d );
                $edit = editButton( 'category/list?addModal=true&id='.$d );

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
        $url = $this->id ? 'category/save/'.$this->id : 'category/save';
        $data = [
            'url'    => $url,
            'fields' => array (
            'name' => 
                array (
                    'label' => 'Nome',
                    'name' => 'name',
                    'type' => 'text',
                    'rules' => 'trim|required|max_length[60]',
                ),
            'image' => 
                array (
                    'label' => 'Foto',
                    'name' => 'image',
                    'type' => 'file',
                    'rules' => 'trim|max_length[255]',
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