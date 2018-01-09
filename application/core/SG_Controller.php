<?php defined('BASEPATH') OR exit('No direct script access allowed');

class SG_Controller extends CI_Controller {
    
    /**
     * $model
     * 
     * Model do controller
     * 
     */
    public $model = null;

    /**
     * Indica se deve pernmitir exclusao multipla
     *
     * @var boolean
     */
    public $enableMultipleDelete = false;

    /**
     * __construct
     * 
     * Método construtor
     * 
     */
    public function __construct() {
        parent::__construct();

        // Seta os grupos
        $this->setGroups();
    }

    /**
     * setGroups
     * 
     * Seta os grupos na view
     *
     * @return void
     */
    public function setGroups() {
        
        // Verifica se está no mode de edição
        if ( editMode() ) {

            // Carrega a model
            $this->load->model( 'group' );

            // Carrega os dados
            $groups = $this->Group->nonAdmin();
            setItem( 'groups', $groups );
        }
    }

    /**
     * protectIt
     * 
     * Proteje um método do controller
     * 
     */
    public function protectIt( $action, $model = false ) {

        // Verifica se a ação é booleana
        if ( is_bool( $action ) ) {
            if ( !$action ) {

                // Seta o erro
                flash( 'swaErrorBody', 'Você não tem permissão para esta ação!' );
                close_page( 'home' );

            } else return true;
        }

        // Verifica se existe uma model
        $model = !$model && isset( $this->model ) ? $this->model : false;
        if ( !$model ) return false;

        // Verifica se o usuário pode fazer a ação
        if ( !$model->authorize( $action ) ) {

            // Seta o erro
            if ( auth() ) {
                flash( 'swaErrorBody', 'Você não tem permissão para esta ação!' );
                close_page( 'home' );                
            } else {
                close_page( 'auth' );
            }
        } else return true;
    }

    /**
	 * Deleta mais de um item
	 *
	 * @return void
	 */
	public function delete_mutiples() {
        if ( !$this->enableMultipleDelete ) return;

		$this->protectIt( 'delete' ); 

		// Carrega os ids
		$ids = $this->input->post( 'ids' );
		$ids = $ids ? $ids : [];

		// Percorre o array
		foreach( $ids as $id ) {

			// Carrega o item
			$item = $this->model->findById( $id );
			if ( !$item ) continue;

			// Deleta o item
			$item->delete();
		}

		// Seta a mensagem
		flash( 'swaSuccessBody', 'Ação em massa realizada com sucesso!' );
		close_page( 'category/list' );
	}
}

// End of file