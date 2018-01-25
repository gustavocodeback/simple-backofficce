<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Personal_category extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// carrega a model de noticias
		$this->load->model( 'personal_category' );
	}

	/**
	 * __validPersonalCategoryForm
	 * 
	 * valida um formulário
	 *
	 * @return void
	 */
	private function __validPersonalCategoryForm() {
		$rules = [
			[
				'field' => 'name',
				'label' => 'Nome',
				'rules' => 'min_length[3]|max_length[40]|required'
			]
		];

		// valida o formulário
		$this->form_validation->set_rules( $rules );
		return $this->form_validation->run();
	}

	/**
	 * save_category
	 * 
	 * salva a categoria
	 */
	public function save_category() {
		loggedOnly();

		// cria uma nova categoria pessoal
		$categoria = $this->Personal_category->new();
		$categoria->fill( $this->input->post(NULL, TRUE) );

		// Valida o formulario
		if( $this->__validPersonalCategoryForm() ) {

			// sava a categoria
			if( $categoria->save() ){
				return resolve( $categoria->parse() );
			} else return reject( 'Erro ao salvar a cateogria' );
		} else return reject( validation_errors() );
	}

	/**
	 * Lista as categorias pessoais
	 *
	 * @return void
	 */
	public function list() {
		loggedOnly();

		// Pega as categorias do usuário
		$categories = $this->Personal_category->byUser( auth() );
		$categories = $categories ? $categories : [];

		// Percorre um foreach
		$response = [];
		foreach( $categories as $category ) {
			$response[] = [
				'id' => $category->id,
				'name' => $category->name
			];
		}

		// Volta as categorias encontrada
		resolve( $response );
	}

	/**
	 * delete
	 * 
	 * Deleta uma categoria pessoa
	 */
	public function delete( $personal_category_id ) {
		loggedOnly();

		// Busca a categoria pessoal
		$personalCategory = $this->Personal_category->findById( $personal_category_id );

		// Verifica se a categoria existe
		if( !$personalCategory ) return reject( 'Categoria não existe' );

		// Reseta os campos na tabela de follows
		if( $personalCategory->update() ) {
			
			// Deleta a categoria
			if( $personalCategory->delete() ) {
				return resolve( 'Ação realizada com sucesso' );
			} return reject( 'Erro ao deletar a categoria pessoal' );
		} return reject( 'Erro ao atualizar a tabela de follows' );
	}

	/**
	 * edit
	 * 
	 * Edita uma categoria pessoal
	 */
	public function edit() {
		loggedOnly();

		// Pega os dados
		$dados = $this->input->post();

		// Busca a categoria pessoal
		$personalCategory = $this->Personal_category->findById( $dados['id'] );
		
		// Verifica se existe
		if( !$personalCategory ) return reject( 'Categoria não existe' );

		// Seta o nome
		$personalCategory->name = $dados['name'];

		// Tenta salvar
		if( $personalCategory->save() ) {
			return resolve( 'Ação realizada com sucesso' );
		} return resolve( 'Erro ao salvar a categoria pessoal' );
	}
}

// End of file
