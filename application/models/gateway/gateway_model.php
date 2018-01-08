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
      'default_gateway' => 'default_gateway',
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
      1 => 'Foto',
      2 => 'Nome',
      3 => 'Categoria',
      4 => 'Região',
      5 => 'Padrão',
      6 => 'Ações',
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
            'db' => 'image',
            'dt' => 1,
          ),
          2 => 
          array (
            'db' => 'name',
            'dt' => 2,
          ),
          3 => 
          array (
            'db' => 'category_id',
            'dt' => 3,
            'formatter' => function( $d, $row ) {

                    // Carrega a model
		                $this->load->model( 'category' );

                    $category = $this->Category->findById( $d );

                    return $category->name;
                }
          ),
          4 => 
          array (
            'db' => 'region_id',
            'dt' => 4,
            'formatter' => function( $d, $row ) {

                    // Carrega a model
		                $this->load->model( 'region' );

                    $region = $this->Region->findById( $d );

                    return $region->name;
                }
          ),
          5 => 
          array (
            'db' => 'default_gateway',
            'dt' => 5,
          ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 6,  
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
              'label' => 'Região',
              'model' => [ 'name' => 'region' , 'call' => 'Region' ],
              'name' => 'region_id',
              'type' => 'select',
              'rules' => 'trim|required|max_length[11]|integer',
            ),
            'category_id' => 
            array (
              'label' => 'Categoria',
              'model' => [ 'name' => 'category' , 'call' => 'Category' ],
              'name' => 'category_id',
              'type' => 'select',
              'rules' => 'trim|required|max_length[11]|integer',
            ),
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
              'name'  => 'image',
              'type'  => 'text',
              'rules' => 'trim|required|max_length[255]',
            ),
            'rss' => 
            array (
              'label' => 'RSS',
              'name'  => 'rss',
              'type'  => 'text',
              'rules' => 'trim|required|max_length[255]',
            ),
            'default_gateway' => 
            array (
              'label'  => 'Padrão',
              'name'   => 'default_gateway',
              'opcoes' => [ 
                  [ 'label' => 'Sim', 'value' => 'S' ],
                  [ 'label' => 'Não', 'value' => 'N' ]
                ],
              'type'   => 'select',
              'rules'  => 'trim|required|max_length[1]',
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