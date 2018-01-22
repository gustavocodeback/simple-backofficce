<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gateway extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// carrega a model de veiculos de noticias
		$this->load->model( [ 'gateway', 'customer_gateway' ] );
	}
	
	/**
	 * get
	 *
	 * retorna um veiculo de noticia pelo id
	 */
	public function get( $id ) {
		
		// verifica se veio veiculo
		if( $gateway = $this->Gateway->findById( $id ) ) {

			// busca a imagem e acategoria
			$image    = $gateway->belongsTo( 'midia' );
			$category = $gateway->belongsTo( 'category' );

			// Inicia a veriavel
			$reported = false;
			
			// Verifica se tem usuario logado
			if( $user = auth() ) {

				// Verifica se está denunciado
				$reported = ( $gateway->reported( $user ) ) ? true : false ;
			}

			// formata os dados
			$gateway_data = [
				'id'        => $gateway->id,
				'name'      => $gateway->name,
				'url'       => $gateway->url,
				'image'     => $image->path(),
				'category'  => $category->name,
				'status'    => $gateway->status( auth() ),
				'reported'  => $reported,
				'crated_at' => $gateway->created_at
			];

			return resolve( $gateway_data );
		} else return reject( 'O veículo desejado não existe.' );
	}

	/**
	 * Busca os gateways pelo ID da categoria
	 *
	 * @param [type] $category_id
	 * @param integer $page
	 * @return void
	 */
	public function get_by_category( $category_id, $page = 1 ) {

		// Carrega a categoria
		$this->load->model( 'category' );
		$category = $this->Category->findById( $category_id );
		if ( !$category ) return reject( 'A categoria pesquisada não existe!' );

		// Obtem as páginas
		$pages = $this->Gateway->where( " category_id = $category_id " )->paginate( $page, 10 );

		// Percorre todos os itens
		foreach( $pages->data as $gateway ) {

			// Verifica se tem usuario logado
			if( $user = auth() ) {

				// Verifica se está denunciado
				$reported = ( $gateway->reported( $user ) ) ? true : false ;
			}

			// Pega a imagem do gateway
			$image = $page->belongsTo( 'midia' );

			// formata os dados
			$pages->data = [
				'id'        => $gateway->id,
				'name'      => $gateway->name,
				'url'       => $gateway->url,
				'image'     => $image->path(),
				'category'  => $category->name,
				'status'    => $gateway->status( auth() ),
				'reported'  => $reported,
				'crated_at' => $gateway->created_at
			];
		}

		// Envia os dados
		return resolve( $pages );
	}

	/**
	 * Salva o follow
	 *
	 */
	public function follow( $gateway_id ) {
		loggedOnly();
		
		// Carrega a model
		if ( $gateway = $this->Gateway->findById( $gateway_id ) ) {

			// Seta o follow
			if ( $gateway->follow( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'O Gateway informado não existe' );
	}
	
	/**
	 * Deixa de seguir um veiculo
	 *
	 */
	public function unfollow( $gateway_id ) {
		loggedOnly();

		// Busca o veiculo
		if ( $gateway = $this->Gateway->findById( $gateway_id ) ) {

			// Seta o unfollow
			if ( $gateway->unfollow( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'O Gateway informado não existe' );
	}

	/**
	 * Denuncia o veiculo
	 */
	public function report( $gateway_id ) {
		loggedOnly();

		// Busca o veiculo
		if( $gateway = $this->Gateway->findById( $gateway_id ) ) {

			// Seta a denuncia
			if( $gateway->report( auth() ) ) {
				return resolve( 'Açaõ realizada com sucesso' );
			} else reject( 'Não foi possivel realizar a ação' );
		} else reject( 'O Gateway informado não existe' );
	}

	/**
	 * Silenciar veiculo
	 */
	public function mute( $gateway_id ) {
		loggedOnly();
		
		// Carrega a model
		if ( $gateway = $this->Gateway->findById( $gateway_id ) ) {

			// Seta o unfollow
			if ( $gateway->mute( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'O Gateway informado não existe' );
	}

	/**
	 * Obtem inscrições por categoria
	 *
	 * @param [type] $category_id
	 * @return void
	 */
	public function get_subscription_by_category( $category_id ) {
		loggedOnly();

		// Busca as subscriptions
		$subs = $this->Gateway->where( " category_id = $category_id ")
							  ->subscribed( auth() )
							   ->find();
		$subs = $subs ? $subs : [];

		// Formata os dados
		$response = [];
		foreach( $subs as $sub ) {

			// Pega a midia do gateway
			$midia =  $sub->belongsTo( 'midia' );
			$path  = $midia ? $midia->path() : base_url( 'public/images/empty.jpg' );

			// Formata os dados
			$response[] = [
				'id'    => $sub->id,
				'name'  => $sub->name,
				'midia' => $path
			];
		}
		
		// Volta os dados encontrados
		return resolve( $response );
	}
}

// End of file
