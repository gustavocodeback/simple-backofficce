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
      'visible' => 'visible',
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
     * Deixa de seguir um gateway
     * 
     * @return void
     */
    public function unfollow( $customer ) {

      // Carrega a model de relacao
      $this->load->model( 'customer_gateway' );

      // monta a query
		  $where = 'customer_id = '.$customer->id. ' AND gateway_id = '.$this->id;    

      // busca o status da relação id id
      $ret = $this->Customer_gateway->where( $where )->findOne();
      if( !$ret ) return true;

      // verifica se esta seguindo
      return $ret->delete();
    }

    /**
     * Comeca a seguir um gateway
     * 
     * @return void
     */
     public function follow( $customer, $personalCategoryId = false ) {
      
      // Carrega a model de relacao
      $this->load->model( 'customer_gateway' );

      // monta a query
      $where = 'customer_id = '.$customer->id. ' AND gateway_id = '.$this->id;    

      // busca o status da relação id id
      $ret = $this->Customer_gateway->where( $where )->findOne();
      
      // Verifica se existe a seguida
      if( $ret ) {
        if ( $ret->status != 'F' ) {
          $ret->status = 'F';
          return $ret->save();
        } else return true;
      };
      
      // Salva a seguida
      $seg = $this->Customer_gateway->new();
      $seg->fill([
        'customer_id' => $customer->id,
        'gateway_id'  => $this->id,
        'status'      => 'F',
        'personal_category_id' => ( $personalCategoryId ) ? $personalCategoryId : ''
      ]);
      return $seg->save();
    }

    /**
     * Pega o status em relacao a um usuario
     * 
     * @return void
     */
    public function status( $customer ) {
      if ( !$customer ) return 'U';
      
      // Carrega a model de relacao
      $this->load->model( 'customer_gateway' );
      
      // monta a query
      $where = 'customer_id = '.$customer->id. ' AND gateway_id = '.$this->id;    

      // busca o status da relação id id
      $ret = $this->Customer_gateway->where( $where )->findOne();
      return $ret ? $ret->status : 'U';
    }

    /**
     * Denuncia o veiculo de noticia
     * 
     */
     public function report( $customer ) {
      
      // Carrega a model de denuncias
      $this->load->model( 'report_gateway' );

      // Salva a denuncia
      $report = $this->Report_gateway->new();
      $report->fill([
        'customer_id' => $customer->id,
        'gateway_id'  => $this->id
      ]);
      return $report->save();
    }

    /**
     * Verifica se foi denunciado por
     * um usuario especifico
     */
    public function reported( $customer ) {
      if ( !$customer ) return false;

      // Carrega a model de denuncias
      $this->load->model( 'report_gateway' );

      // Monta a query
      $where = 'customer_id = '.$customer->id.' AND gateway_id = '.$this->id;

      // Busca a denuncia
      if( $report = $this->Report_gateway->where( $where )->findOne() ) {
        return true;
      } else return false;
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
     * Pega o campo principal
     *
     * @return void
     */
    public function main() {
        return $this->id;
    }

    /**
     * Pega o id da cateogoria pela url
     *
     * @return void
     */
    private function __getCategoryIdFromUrl() {
      return $this->uri->segment( 3, 0 );
    }

    /**
     * Pega o numero de inscritos
     *
     * @return void
     */
    public function subscriptions() {

      // Monta a query
      $q = $this->db->query( " SELECT COUNT(*) as total FROM customer_gateway
                               WHERE gateway_id = ".$this->id );
      
      // Verifica se existem resultados
      if ( $q->num_rows() > 0 ) {
        return $q->result()[0]->total;
      } else return 0;
    }

    /**
     * Verifica se o veiculo esta mutado ou não
     *
     * @return boolean
     */
    public function muted( $user ) {

      // Verifica o login
      if ( !$user ) return $this->default_gateway == 'S' ? false : true;

      // Carrega a model
      $this->load->model( 'customer_muted' );

      // Pega a referencia
      $muted = $this->Customer_muted->byGateway( $this->id )
                                    ->byCustomer( auth()->id )
                                    ->findOne();
      
      // Verifica se existe o registro
      return !$muted;
    }
    
    /**
     * Link de adicionar
     *
     * @return void
     */
    public function addLink() {
      $catId = $this->__getCategoryIdFromUrl();
      return "gateway/list/$catId?addModal=true";
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
                  if ( $midia ) {
                    return "<img src='".$midia->path()."' width='50px'>";
                  } else {
                    return "<img src='".base_url( 'public/images/empty.jpg' )."' width='50px'>";
                  }
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
                $catId = $this->__getCategoryIdFromUrl();

                // Formata a data
                $del  = rmButton( "gateway/delete/$catId/".$d );
                $edit = editButton( "gateway/list/$catId?addModal=true&id=".$d  );
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
        $catId = $this->__getCategoryIdFromUrl();
        $url   = $this->id ? "gateway/save/$catId/".$this->id : "gateway/save/$catId";
        $data  = [
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
            'visible' => 
            array (
              'label'  => 'Visível',
              'name'   => 'visible',
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