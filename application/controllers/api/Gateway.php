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
				'id'        	=> $gateway->id,
				'name'      	=> $gateway->name,
				'url'       	=> $gateway->url,
				'image'     	=> $image->path(),
				'category'  	=> $category->name,
				'status'        => $gateway->status( auth() ),
				'subscriptions' => $gateway->subscriptions(),
				'reported'      => $reported,
				'crated_at'     => $gateway->created_at
			];

			return resolve( $gateway_data );
		} else return reject( 'O veículo desejado não existe.' );
	}

	/**
	 * Pesquisa os veiculos pelo nome
	 *
	 */
	public function search_all( $query, $page = 1 ) {
	
		// Pega a query para pesquisa
		$query = $query ? $query : '';
	
		// Otem as paginas
		$gateways = $this->Gateway->where( " name LIKE '%$query%' " )->paginate( $page, 20 );
		
		// Inicia a variavel
		$reported = false;

		// Percorre todos os gateways
		$return = [];
		foreach( $gateways->data as $gateway ) {

			// Verifica se tem usuario logado
			if( $user = auth() ) {

				// Verifica se esta denunciado
				$reported = ( $gateway->reported( $user ) ) ? true : false;
			}

			// Busca a imagem
			$image = $gateway->belongsTo( 'midia' );
			$category = $gateway->belongsTo( 'category' );

			// Formata os dados
			$return[] = [
				'id'        	=> $gateway->id,
				'name'      	=> $gateway->name,
				'url'       	=> $gateway->url,
				'image'     	=> $image->path(),
				'category'  	=> $category->name,
				'status'  	  	=> $gateway->status( auth() ),
				'subscriptions' => $gateway->subscriptions(),
				'reported'  	=> $reported,
				'crated_at' 	=> $gateway->created_at
			];
		}
		$gateways->data = $return;

		// Envia os dados
		return resolve( $gateways );
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

		$query = $this->input->get( 'query' );
		$query = $query ? $query : '';

		// Obtem as páginas
		$pages = $this->Gateway->where( " category_id = $category_id AND name LIKE '%$query%' " )->paginate( $page, 20 );

		// Inicia a veriavel
		$reported = false;

		// Percorre todos os itens
		$toReturn = [];
		foreach( $pages->data as $gateway ) {

			// Verifica se tem usuario logado
			if( $user = auth() ) {

				// Verifica se está denunciado
				$reported = ( $gateway->reported( $user ) ) ? true : false ;
			}

			// Pega a imagem do gateway
			$image = $gateway->belongsTo( 'midia' );

			// formata os dados
			$toReturn[] = [
				'id'        	=> $gateway->id,
				'name'      	=> $gateway->name,
				'url'       	=> $gateway->url,
				'image'     	=> $image->path(),
				'category'  	=> $category->name,
				'status'  	  	=> $gateway->status( auth() ),
				'subscriptions' => $gateway->subscriptions(),
				'reported'  	=> $reported,
				'crated_at' 	=> $gateway->created_at
			];
		}
		$pages->data = $toReturn;

		// Envia os dados
		return resolve( $pages );
	}

	/**
	 * Salva o follow
	 *
	 */
	public function follow( $gateway_id, $personalCategoryId = false ) {
		loggedOnly();
		
		// Carrega a model
		if ( $gateway = $this->Gateway->findById( $gateway_id ) ) {

			// Seta o follow
			if ( $gateway->follow( auth(), $personalCategoryId ) ) {
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
		$this->db->select( 'gateway.*' );
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
				'id'       => $sub->id,
				'category' => $sub->category_id,
				'name'     => $sub->name,
				'midia'    => $path
			];
		}
		
		// Volta os dados encontrados
		return resolve( $response );
	}

	/**
	 * Pega as inscriçoes ordenadas pela categoria
	 *
	 * @return void
	 */
	public function get_ordered_subscriptions() {
		loggedOnly();
		$this->load->model( 'category' );

		// Busca as subscriptions
		$this->db->select( 'gateway.*' );
		$subs = $this->Gateway->subscribed( auth() )
							  ->find();
		$subs = $subs ? $subs : [];

		// Agrupa por categoria
		$orderedByCategories = [];
		foreach( $subs  as $sub ) {

			// Veririca se já existe a categoria no array
			if ( !isset( $orderedByCategories[$sub->category_id] ) ) {
				$orderedByCategories[$sub->category_id] = [];
			}

			// Adiciona o veiculo
			$orderedByCategories[$sub->category_id][] = $sub;
		}

		// Busca os dados da categoria
		$response = [];
		foreach( $orderedByCategories as $cat_id => $gateways ) {
			
			// Busca as imagens do veiculo
			$gateways = array_map( function( $value ) {
				$midia = $value->belongsTo( 'midia' );
				$value->midia = $midia ? $midia->path() : base_url( 'public/images/empty.jpg' );
				return $value;
			}, $gateways );
			
			// Obtem os dados e formata a saida
			$cat = $this->Category->findById( $cat_id );
			$response[] = [
				'id' => $cat_id,
				'name' => $cat->name,
				'gateways' => $gateways
			];
		}

		// Volta o resultado
		resolve( $response );
  	}
}

// End of file
