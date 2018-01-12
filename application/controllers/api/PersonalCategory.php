<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class PersonalCategory extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

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

		// cria uma nova categoria pessoal
		$categoria = $this->Personal_category->new();
		$categoria->fill( $this->input->post(NULL, TRUE) );

		if( $this->__validPersonalCategoryForm() ) {

			// sava a categoria
			if( $categoria->save() ){
				return resolve( 'success' );
			} else {
				return reject( 'Erro ao salvar a cateogria' );
			}
		} else {
			return reject( validation_errors() );
		}
		return reject( 'Erro ao carregar o endpoint' );
	}
}

// End of file
