<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gateway extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

		// carrega a model de veiculos de noticias
		$this->load->model( [ 'gateway', 'customer_gateway' ] );
	}
	
	/**
	 * get
	 *
	 * retorna um veiculo de noticia pelo id
	 */
	public function get( $id ) {

		// busca o veiculo pelo id
		$gateway = $this->Gateway->findById( $id );
	
		// verifica se veio veiculo
		if( $gateway ) {

			// busca a imagem e acategoria
			$image = $gateway->belongsTo( 'midia' );
			$category = $gateway->belongsTo( 'category' );

			// formata os dados
			$gateway_data = [
				'id' => $gateway->id,
				'name' => $gateway->name,
				'url' => $gateway->url,
				'image' => $image->path(),
				'category' => $category->name
			];

			return resolve( $gateway_data );
		} else {
			return reject( 'O veículo desejado não existe.' );
		}
	}

	/**
	 * Salva o follow
	 */
	public function save_follow() {

		// cria um novo follower
		$follow = $this->Customer_gateway->new();
		$follow->fill( $this->input->post(NULL, TRUE) );

		// verifica se salvou
		if( $follow ) {

			// salva o follow
			if( $follow->save() ) {
				return resolve( true );
			} else {
				return reject( 'Erro ao salvar o follow' );
			}
		} else {
			return reject( false );
		}
	}

	/**
	 * Verifica se esta seguindo
	 */
	public function is_following() {

		// pega os dados
		$dados = $this->input->post();

		// monta a query
		$where = 'customer_id = '.$dados['customer_id']. ' AND gateway_id = '.$dados['gateway_id'];

		// busca o status da relação id id
		$ret = $this->Customer_gateway->where( $where )->findOne();
		if( !$ret ) return reject( 'Nada encontrado' );

		// verifica se esta seguindo
		if( $ret->status == 'F' ) {
			return resolve( 'true' );
		} else {
			return reject( 'false' );
		}
	}
	
	/**
	 * Deixa de seguir um veiculo
	 */
	public function unfollow() {

		// pega os dados
		$dados = $this->input->post();
		
		// monta a query
		$where = 'customer_id = '.$dados['customer_id']. ' AND gateway_id = '.$dados['gateway_id'];

		// busca o status da relação id id
		$ret = $this->Customer_gateway->where( $where )->findOne();
		if( !$ret ) return reject( 'Nada encontrado' );

		// verifica se esta seguindo
		if( $ret->delete() ) {
			return resolve( 'true' );
		} else {
			return reject( 'false' );
		}
	}
}

// End of file
