<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Category
 * 
 * Controller de crud para Category
 * 
 */
class Category extends SG_Controller {

	/**
	 * model
	 * 
	 * model sendo usada no crud
	 *
	 * @var [type]
	 */
	public $model;

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

		// carrega a model
		$this->load->model( 'category' );
		$this->model = $this->Category;

		// ativa a autenticação
		protect();
	}

	/**
	 * __validate
	 * 
	 * valida um formulário
	 *
	 * @return void
	 */
	public function __validate() {
		$rules = [
			[
				'field' => 'name',
				'label' => 'Nome',
				'rules' => 'min_length[2]|max_length[255]required'
			], [
				'field' => 'slug',
				'label' => 'Slug',
				'rules' => 'min_length[2]|max_length[255]required'
			], [
				'field' => 'description',
				'label' => 'Descrição',
				'rules' => 'min_length[2]|max_length[1000]required'
			]
		];

		// valida o formulário
        $this->form_validation->set_rules( $rules );
        return $this->form_validation->run();
	}

	/**
	 * list
	 * 
	 * lista os dados
	 *
	 * @return void
	 */
	public function list() {
		
		// lista os dados
		$list = $this->model->paginate();

		// seta os dados em forma de card
		$list = array_map( function( $value ){
			return [
				'id'          => $value->id,
				'image'       => $value->midia() ? $value->midia()->path : null,
				'title'       => $value->name,
				'description' => $value->description,
				'remove_url'  => site_url( 'category/delete/'.$value->id ),
				'edit_url'    => site_url( 'category/update/'.$value->id )
			];
		}, $list->data );

		// seta na view
		$this->view->set( 'list', $list );
		
		// carrega a view
		$this->view->render( 'card-grid' );
	}

	/**
	 * delete
	 * 
	 * deleta um dado
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function delete( $id = false ) {

		// carrega a entidade
		$item = $this->model->findById( $id );
		if ( !$item ) close_page( 'home' );

		// deleta o item
		$item->delete();

		// seta a mensagem de sucesso
		$this->view->set( 'success', 'Item removido com sucesso' );

		// carrega a view
		$this->list();
	}

	/**
	 * create
	 * 
	 * cria um dado
	 *
	 * @return void
	 */
	public function create() {

		// carrega o item
		$item = $this->model->new();

		// seta na view
		$this->view->set( 'item', $item );

		// carrega o formulario de criacao
		$this->view->render( 'category-form' );
	}

	/**
	 * update
	 * 
	 * faz a atualização de um dado
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function update( $id = false ) {

		// carrega a entidade
		$item = $this->model->findById( $id );

		// seta na view
		$this->view->set( 'item', $item );
		$this->view->set( 'image', $item->midia() ? $item->midia()->path : null );

		// carrega a view
		$this->view->render( 'category-form' );
	}

	/**
	 * save
	 * 
	 * salva um dado
	 *
	 * @param boolean $id
	 * @return void
	 */
	public function save( $id = false ) {

		// verifica se existe um id
		if ( $id ) {
			$item = $this->model->findById( $id );
		} else {
			$item = $this->model->new();
		}

		// seta o item
		$this->view->set( 'item', $item );

		// carrega a model de midia
		$this->load->model( 'midia' );

		// faz o upload
		$file = $this->picture->upload( 'cover' );
		
		// verifica se existe um arquivo
		if ( $file ) {
			$midia = $this->Midia->new();
			$midia->name = $file;
			$midia->path = base_url( 'public/uploads/'.$file );
			$midia->type = 'I';
			$midia->save();
			$item->midia_id = $midia->id;
		}

		// valida o formulario
		if ( $this->__validate() ) {

			// preenche a entidade
			$item->fill( $this->input->post() );

			// seta o status
			$item->status = $item->status ? 'A' : 'B'; 

			// tenta salvar o item
			if ( $item->save() ) {
				$this->view->set( 'success', 'Item salvo com sucesso' );
				$this->list();
				return;
			} else {
				$this->view->set( 'errors', 'Erro ao salvar o item' );
			}
		} else {
			$this->view->set( 'errors', validation_errors() );
		}

		// carrega a view
		$this->view->render( 'category-form' );
	}
}

/* end of file */
