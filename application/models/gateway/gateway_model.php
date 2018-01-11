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
      'midia_id' => 'midia_id',
      'name' => 'name',
      'url' => 'url',
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
      'ID',
      'Foto',
      'Nome',
      'Categoria',
      'Região',
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
    public function DataTables( $cat_id = false ) {
        
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
            'db' => 'midia_id',
            'dt' => 1,
            'formatter' => function( $d, $row ) {

                // Verifica se existe uma midia
                if ( $d ) {

                  // Carrega a model
                  $this->load->model( 'midia' );
                  $midia = $this->Midia->findById( $d );
                  return "<img src='".$midia->path()."' width='50px'>";
                }

                // Volta o resultado
                return '';
            }
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
                    if ( $category )
                      return $category->name;
                    else
                      return '';
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
          array (  
            'db' => 'id',    
            'dt' => 6,
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
            'dt' => 5,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'gateway/delete/'.$d );
                $edit = editButton( 'gateway/list?addModal=true&id='.$d );
                $list = '<a href="'.site_url( 'gateway/last_news/'.$d ).'" class="btn btn-sm btn-primary text-light">
                          <i class="fa fa-list"></i>
                        </a>';

                // Volta os botões
                return $del.'&nbsp'.$edit.'&nbsp'.$list;
            }
        ];

        // Volta o resultado
        return $this->datatables->send( $this->table(), $columns, false, "category_id = $cat_id" );
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
            'url' => 
            array (
              'label' => 'Url',
              'name' => 'url',
              'type' => 'text',
              'rules' => 'trim|required|max_length[60]',
            ),
            'image' => 
            array (
                'label' => 'Foto',
                'name'  => 'midia_id',
                'type'  => 'midia',
                'size'  => '1',
                'ratio' => '1:1'
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

    /**
     * bulkActions
     * 
     * Ações em massa
     *
     * @return void
     */
    public function bulkActions() {
      return [
          'Excluir' => site_url( 'gateway/delete_mutiples' )
      ];
  }
}

// End of file