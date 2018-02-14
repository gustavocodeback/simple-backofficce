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
		$image = $gateway->belongsTo( 'midia' );
		$category = $gateway->belongsTo( 'category' );
	
		// formata os dados
		return [
			'id'        	=> $gateway->id,
			'name'      	=> $gateway->name,
			'url'       	=> $gateway->url,
			'image'     	=> $image ? $image->path() : base_url( 'public/images/empty.jpg' ),
			'category'  	=> $category ? $category->name : '' ,
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
	 * Salva uma imagem para o local informado
	 *
	 * @param [type] $url
	 * @param [type] $saveto
	 * @return void
	 */
	private function __grabImage( $url, $saveto ){
		$ch = curl_init ($url);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_BINARYTRANSFER,1);
		$raw=curl_exec( $ch );
		curl_close ( $ch );
		if( file_exists( $saveto ) ){
			unlink( $saveto );
		}
		$fp = fopen( $saveto, 'x' );
		fwrite( $fp, $raw );
		fclose( $fp );
	}

	/**
	 * Salva uma imagem de um link para a tabela de midia
	 *
	 * @param [type] $image_link
	 * @return void
	 */
	 private function __saveDefaultMidia( $image_link ) {
		$this->load->model( 'midia' );

		// Gera a hash da midia
		$hash = getToken();
		$this->__grabImage( $image_link, 'public/uploads/'.$hash.'.jpg' );

		// Cria a nova midia
		$midia = $this->Midia->new();
		$midia->fill([
			'name' => $image_link,
			'hash' => $hash,
			'type' => 'image',
			'ext'  => 'jpg'
		]);

		// Salva a midia
		if ( $midia->save() ) {
			return $midia;
		} else return null;
	}

	/**
	 * Salva um veiculo no banco de dados
	 *
	 * @param [type] $feed
	 * @return object | boolean
	 */
	private function __saveGateway( $feed ) {
		
		// Carrega as dependencias
		$this->load->model( 'region' );
		$this->load->library( 'sg_settings' );
		
		// Verifica se deve usar a imagem padrão
		$midia = null;
		$image_link = $feed->image;
		if ( $image_link && strlen( $image_link ) > 0 ) {
			$midia = $this->__saveDefaultMidia( $image_link );
		}
		$midia = $midia ? $midia->id : $midia;
		
		// Busca a regiao
		$region = get_header( 'App-Region' ) ? get_header( 'App-Region' ) : 'BRL';
		$region = $this->Region->where( "sigla = '$region'" )->findOne();

		// Busca a categoria
		$categoria = $this->settings->getBySlug( 'categoria_geral' );

		// Cria um novo gateway
		$gateway = $this->Gateway->new();
		$gateway->fill([
			'region_id'       => $region->id,
			'category_id'     => $categoria[0]['val'],
			'midia_id'        => $midia,
			'name'            => $feed->title,
			'url'             => $feed->siteUrl,
			'rss'             => $feed->feedUrl,
			'default_gateway' => 'N',
			'visible'         => 'N'
		]);

		// Salva o gateway
		if ( $gateway->save() ) {
			return $gateway;
		} else return false;
	}

	/**
	 * Busca um veiculo pelo seu rss
	 *
	 * @param [type] $link
	 * @return object | boolean
	 */
	private function __parse( $link ) {
		
		// Carrega a library
		$this->load->library( 'rss' );

		// Verifica se é uma URL Feedly
		if ( strpos( $link, 'feedly' ) !== false ) {
			$parts = explode( 'http', $link );
			$link = 'http'.urldecode( end( $parts ) );
		}

		// Obtem os links RSS da página
		$feed = $this->rss->parse( $link );
		if ( !$feed ) {
			return;
		}

		// Verifica se esse feed ja existe
		$jaExiste = $this->Gateway->exists( $feed );
		if( $jaExiste ) return $jaExiste;

		// Seta a url da imagem
		$image_link = null;
		if ( $feed )
			$feed->image = $feed->getLogo() ? 
						   $feed->getLogo() : 
						   $this->rss->get_favicon( $feed->getSiteUrl() );
		
		// Salva o gateway passado
		if( $gateway = $this->__saveGateway( $feed ) ) {
			// Seta variavel de categoria geral
			$gateway->categoria_geral = true;
			return $gateway;
		} else return false;
	}

	/**
	 * Pesquisa os veiculos pelo nome
	 *
	 */
	public function search_all( $page = 1 ) {
	
		$query = $this->input->get( 'query' );
		$query = $query ? $query : '';

		// Seta o where
		$where = " name LIKE '%$query%' OR url LIKE '%$query%' OR rss LIKE '%$query%' ";

		// Obtem as páginas
		$pages = $this->Gateway->where( $where )->paginate( $page, 20 );

		// Tenta adicionar o link rss
		if( !$pages->data && ( strpos( $query, '.com' ) !== false ) ) {
			$retorno = $this->__parse( $query );
			if( !$retorno ) {
				return reject( [] );
			} 
			// Seta os dados
			$pages->data[] = $retorno;
			$pages->total_pages = 1;
			$pages->total_itens = 1;
		}

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

		// Seta o where
		$where = " category_id = $category_id AND name LIKE '%$query%' ";

		// Verifica se é para filtrar pela regiao
		if( $region = get_header( 'App-Region' ) ) {
			
			// Carrega a model de regioes
			$this->load->model( 'region' );

			// Busca a regiao
			$region = $this->Region->where( "sigla = '$region'" )->findOne();

			// Seta o where com a regiao
			$where .= " AND region_id = $region->id ";
		}

		// Obtem as páginas
		$pages = $this->Gateway->where( $where )->paginate( $page, 20 );

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
