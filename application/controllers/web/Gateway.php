<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Gateway
 * 
 * Controller de crud para Gateway
 * 
 */
class Gateway extends SG_Controller {

	/**
	 * model
	 * 
	 * model sendo usada no crud
	 *
	 * @var [type]
	 */
	public $model;

	/**
     * Indica se deve pernmitir exclusao multipla
     *
     * @var boolean
     */
    public $enableMultipleDelete = true;

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		$this->protectIt( admin() );
		sidebar( 'Veículos de notícias' );

		// carrega a model
		$this->load->model( 'gateway' );
		$this->model = $this->Gateway;

		// Verifica se existe um id
		$id = $this->input->get( 'id' );
		$model = $this->model;
		if ( $id ) {
			if ( $md = $this->model->findById( $id ) ) $model = $md;
		}

		// Seta a model do grid
		setItem( 'url', 'gateway/datatables' );
		setItem( 'modelGrid', $model );
	}

	/**
	 * __validate
	 * 
	 * valida um formulário
	 *
	 * @return void
	 */
	public function __validate() {
		$rules = array (
			0 => 
			array (
				'field' => 'region_id',
				'label' => 'region_id',
				'rules' => 'trim|required|max_length[11]|integer',
			),
			1 => 
			array (
				'field' => 'category_id',
				'label' => 'category_id',
				'rules' => 'trim|required|max_length[11]|integer',
			),
			2 => 
			array (
				'field' => 'name',
				'label' => 'name',
				'rules' => 'trim|required|max_length[60]',
			),
			3 => 
			array (
				'field' => 'image',
				'label' => 'image',
				'rules' => 'trim|max_length[255]',
			),
			4 => 
			array (
				'field' => 'rss',
				'label' => 'rss',
				'rules' => 'trim|required|max_length[255]',
			),
			5 => 
			array (
				'field' => 'default_gateway',
				'label' => 'default_gateway',
				'rules' => 'trim|required|max_length[1]',
			),
		);

		// valida o formulário
        $this->form_validation->set_rules( $rules );
        return $this->form_validation->run();
	}

	/**
	 * datatables
	 * 
	 * Volta a tabela
	 *
	 * @return void
	 */
	public function datatables( $id ) {
		
		// Chama o método da datatables
		echo $this->model->DataTables( $id );
	}

	/**
	 * list
	 * 
	 * lista os dados
	 *
	 * @return void
	 */
	public function list( $id = false ) {
		$this->protectIt( 'read' ); 
		setTitle( 'Listagem' );
		setItem( 'url', 'gateway/datatables/'.$id );
		
		// Carrega o grid
		view( 'grid/grid' );
	}

	/**
	 * delete
	 * 
	 * deleta um dado
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function delete( $catId = false, $id = false ) {
		$this->protectIt( 'delete' ); 

		// carrega a entidade
		$item = $this->model->findById( $id );
		if ( !$item ) close_page( 'home' );

		// deleta o item
		if( $item->delete() ) {

			// Seta a mensagem
			flash( 'swaSuccessBody', 'Item excluido com sucesso' );
		} else {

			// Seta a mensagem
			flash( 'swaErrorBody', 'Erro ao excluir o item' );
		}

		// carrega a view
		close_page( 'gateway/list/'.$catId );
	}

	/**
	 * save
	 * 
	 * salva um dado
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function save( $catId = false, $id = false ) {
		
		// verifica se existe um id
		if ( $id ) {
			$item = $this->model->findById( $id );
			$this->protectIt( 'edit' );
		} else {
			$item = $this->model->new();
			$this->protectIt( 'add' ); 			
		}
		
		// preenche a entidade
		$item->fill( $this->input->post() );
		setItem( 'modelGrid', $item );
		
		// Pega as midias
		$midias = $this->input->post( 'midia' );
		if ( count( $midias ) > 0 ) $item->midia_id = $midias[0];

		// valida o formulario
		if ( $this->__validate() ) {

			// tenta salvar o item
			if ( $item->save() ) {
				
				// Seta a mensagem
				flash( 'swaSuccessBody', 'Item salvo com sucesso' );
			} else {

				// Seta a mensagem
				flash( 'swaErrorBody', 'Erro ao salvar o item' );
			}
		} else {
			flash( 'swaErrorBody', oneLine( validation_errors() ) );
		}

		// carrega a view
		setItem( 'url', 'gateway/datatables/'.$catId );
		view( 'grid/grid' );
	}

	/**
	 * Lista as ultimas noticias de um canal
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function last_news( $id = false ) {
		setTitle( 'Últimas noticias' );

		// Pega um item
		$item = $this->model->findById( $id );
		if ( !$item ) return;

		// Carrega a library de rss
		$this->load->library( 'rss' );
		$rss = $this->rss->load( $item->rss );

		// Verifica o status	
		if ( !$rss->status ) {
			flash( 'swaErrorBody', $rss->error );
			return;
		}

		// Seta na view
		setItem( 'rss', $rss );

		// Carrega a view
		view( 'gateway/gateway' );
	}

	/**
	 * Carrega a lista
	 *
	 * @return void
	 */
	public function list_categories() {
		setTitle( 'Escolha uma categoria' );

		// Carrega a model
		$this->load->model( 'category' );
		$categories = $this->Category->find();
		$categories = $categories ? $categories : [];
		setItem( 'categories', $categories );

		// Carrega a view
		view( 'gateway/section' );
	}
}

// End of file
