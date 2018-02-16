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
        'name'       => 'name',
        'midia_id'   => 'midia_id',
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
        'Foto',
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
            array (
                'db' => 'id',
                'dt' => 0,
            ),
            array (
                'db' => 'name',
                'dt' => 1,
            ),
            array (
                'db' => 'midia_id',
                'dt' => 2,
                'formatter' => function( $d, $row ) {

                    // Verifica se existe uma midia
                    if ( $d ) {
                        $this->load->model( 'midia' );
                        $midia = $this->Midia->findById( $d );
                        return "<img src='".$midia->path()."' width='50px'>";
                    }

                    // Volta o resultado
                    return '';
                }
            ),
            array (  
                'db' => 'id',    
                'dt' => 4,
                'formatter' => function( $d, $row ) {
                    return '<label class="custom-control custom-checkbox">
                                <input value="'.$d.'" type="checkbox" name="ids[]" class="custom-control-input bulkCheckbox">
                                <span class="custom-control-indicator"></span>
                            </label>';
                }
            )
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
                    'name'  => 'midia_id',
                    'type'  => 'midia',
                    'size'  => '1',
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

    /**
     * bulkActions
     * 
     * Ações em massa
     *
     * @return void
     */
    public function bulkActions() {
        return [
            'Excluir' => site_url( 'category/delete_mutiples' )
        ];
    }
}

// End of file