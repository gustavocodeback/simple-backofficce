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
	 * Deixa a resposta do gateway de forma padrão
	 *
	 * @param [type] $gateway
	 * @return void
	 */
	private function __formatGetwayJson( $gateway ) {
		// Pega o usuário logado, se existir
		$user = auth();

		// Busca a imagem e acategoria
		$image    = $gateway->belongsTo( 'midia' );
		$category = $gateway->belongsTo( 'category' );
		
		// formata os dados
		return [
			'id'        	=> $gateway->id,
			'name'      	=> $gateway->name,
			'url'       	=> $gateway->url,
			'image'     	=> $image ? $image->path() : base_url( 'public/images/empty.jpg' ),
			'category'  	=> $category->name,
			'status'        => $gateway->status( $user ),
			'muted'         => $gateway->muted( $user ),
			'subscriptions' => $gateway->subscriptions(),
			'reported'      => $gateway->reported( $user ),
			'crated_at'     => $gateway->created_at
		];
	}

	/**
	 * get
	 *
	 * retorna um veiculo de noticia pelo id
	 */
	public function get( $id ) {
		
		// verifica se veio veiculo
		if( $gateway = $this->Gateway->findById( $id ) ) {

			// formata os dados
			$gateway_data = $this->__formatGetwayJson( $gateway );

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

			// Formata os dados
			$return[] = $this->__formatGetwayJson( $gateway );
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


			// formata os dados
			$toReturn[] = $this->__formatGetwayJson( $gateway );
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
	 * Deixa de seguir varios veiculos
	 *
	 */
	public function unfollow_many() {
		loggedOnly();
		$user = auth();

		// Pega os ids 
		$gateways_id = $this->input->post( 'gateways_id' );
		$this->load->model( 'personal_category' );

		// Percorre os ids
		foreach( $gateways_id as $id ) {

			// Busca os veiculos
			if( $gateway = $this->Gateway->findById( $id ) ) {

				// Seta o unfollow
				if( !$gateway->unfollow( $user ) ) {
					return reject( 'Não foi possivel deixar de seguir '.$gateway->name );
				}
			} else return reject( 'O '.$gateway->name.' não existe' );
		}

		// Carrega os feeds pessoais
		$personals = $this->Personal_category->byUser( $user );
		$personals = $personals ? $personals : [];

		// Pecorre as categorias pessoais
		foreach(  $personals as $personal ) {
			if ( !$personal->hasSubscriptions() ) $personal->delete();
		}

		return resolve( 'Ação realizada com sucesso' );
	}

	/**
	 * Denuncia o veiculo
	 *
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
		
		// Verifica se o gateway existe
		if ( !$this->Gateway->findById( $gateway_id ) ) return reject( 'Nenhum gateway encontrado' );

		// Carrega a model
		$this->load->model( [ 'customer_muted' ] );

		// Pega a referencia
		$muted = $this->Customer_muted->byGateway( $gateway_id )->byCustomer( auth()->id )->findOne();
		if ( $muted ) {

			// Tenta salvar no banco
			if ( $muted->delete() ) {
				return resolve( 'Ação realizada com sucesso' );
			} else reject( 'Erro ao realizar essa ação' );
		} else resolve( 'Ação realizada com sucesso' );
	}
	
	/**
	 * Retira o silenciamento do muted
	 * 
	 */
	public function unmute( $gateway_id ) {
		loggedOnly();
		
		// Verifica se o gateway existe
		if ( !$this->Gateway->findById( $gateway_id ) ) return reject( 'Nenhum gateway encontrado' );

		// Carrega a model
		$this->load->model( [ 'customer_muted' ] );

		// Pega a referencia
		$muted = $this->Customer_muted->byGateway( $gateway_id )->byCustomer( auth()->id )->findOne();
		if ( !$muted ) {

			// Cria o muted
			$nMuted = $this->Customer_muted->new();
			$nMuted->fill([
				'customer_id' => auth()->id,
				'gateway_id' => $gateway_id
			]);

			// Tenta salvar no banco
			if ( $nMuted->save() ) {
				return resolve( 'Ação realizada com sucesso' );
			} else reject( 'Erro ao realizar essa ação' );
		} else resolve( 'Ação realizada com sucesso' );
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
