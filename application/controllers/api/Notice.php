<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Notice extends SG_Controller {

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
		$this->load->model( 'notice' );
	}

	/**
	 * Formata as noticias no formato de saida
	 * 
	 */
	private function __formatNotices( $notices ) {
		
		// inicializa o array
		$notices_formated = [];
		return [];
		
		// percorre as noticias
		foreach( $notices as $notice ) {

			// busca o veiculo de noticia
			$veiculo = $notice->belongsTo( 'gateway' );

			// busca a imagem do veiculo de noticia
			$image = $veiculo->belongsTo( 'midia' );

			// Verifica se a noticia foi salva para ler dps
			$saveForLater = $reported = false;
			if( auth() ){
				$saveForLater = $notice->status( auth() );
				$reported = ( $notice->reported( auth() ) ) ? true : false ;
			}

			// formata a url
			$url = str_replace( ['http://', 'https://'], '' ,$veiculo->url );
			$url = trim( $url, '/' );

			// formata as informações
			$notices_formated[] = [
				'id'             => $notice->id,
				'title'          => $notice->title,
				'notice_link'    => $notice->notice_link,
				'image_link'     => $notice->image_link ? null : null,
				'description'    => $notice->description,
				'created'        => toHumanReadable($notice->date ),
				'gateway_name'   => $veiculo->name,
				'gateway_image'  => $image ? $image->path() : base_url( 'public/images/empty.jpg' ),
				'gateway_id'     => $notice->gateway_id,
				'gateway_url'    => $url,
				'save_for_later' => ($saveForLater) ? 'T' : 'F',
				'reported'       => $reported,
				'date'           => $notice->date 
			];
		}
		return $notices_formated;
	}

	/**
	 * Pega todas as noticias
	 */
	public function get_notices( $page = 1 ) {
		$this->db->query( 'SET SQL_BIG_SELECTS=1' );
		$user = auth();

		// Pega as categorias enviadas
		$categories = $this->input->post( 'categories_ids' );
		$firstId    = $this->input->post( 'first_id' );

		// Faz a busca das noticias
		$notices = $this->Notice->select( 'n.*' )->lastPublished();

		// Verifica se possui primeiro id
		if( $firstId ) $notices = $notices->where( 'n.id < '.$firstId );

		// Verifica se o usuário está logado
		if ( $user ) {

			// Verifica se existe um id de feed pessoal
			if ( $feed_id = get_header( 'App-Feed-Id' ) ) {

				// Exibe o feed pessoal
				if ( strpos( $feed_id, 'p-' ) !== false ) {
					$notices->findPersonalFeed( str_replace( 'p-', '', $feed_id ), $user );				
				} else {
					$notices->subscribed( $user )->removePersonal()->inCategories( [ $feed_id ] );
				}
			} else {

				// Filtra por categoria
				$notices = $notices->inCategories( $categories );

				// Pega as não silenciadas
				$notices = $notices->notSilenced( $user );
			}

		} else {

			// Filtra por categoria
			$notices = $notices->inCategories( $categories );

			// Verifica se deve fazer o join
			if ( !is_array( $categories ) || count( $categories ) == 0 )
				$notices = $notices->joinGateway( 'g' );
			
			// Pega somente as de veiculos padrão
			$notices->default( 'g' );
		}
		// debug( $this->db->get_compiled_select() );
		
		// Busca as noticias
		$notices = $notices->paginate( $page, 10, 'notice n' );
		
		// verifica se tem noticias
		if( $notices ) {
			$notices->data = $this->__formatNotices( $notices->data );
			return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Pega as noticias de um veiculo
	 */
	public function get_gateway_notices( $gateway_id, $page = 1 ) {

		// Busca as noticias
		$notices = $this->Notice->where( "gateway_id = ".$gateway_id )
								->order('date', 'DESC')
								->paginate( $page, 10 );

		// Verifica se retornou alguma noticia
		if( $notices ) {
			$notices->data = $this->__formatNotices( $notices->data );
			return resolve( $notices );
		} else return reject( false );
	}

	/**
	 * Pega as noticias salvas
	 */
	public function get_saved_notices( $page = 1 ) {
		loggedOnly();
		
		// Carrega a model
		$this->load->model( 'customer_notice' );

		// Busca as relações
		$savedNotices = $this->Customer_notice->getSavedNotices( auth(), $page );
		if( !$savedNotices ) return reject( [] );
		
		// Inicia o array de noticias
		$notices = [];

		// Percorre as noticias salvas
		foreach( $savedNotices->data as $savedNotice ) {
			
			// Busca as noticias
			$notices[] = $this->Notice->findById( $savedNotice->notice_id );
		}

		// Verifica se tem noticias
		if( $notices ) {

			// Formata os dados
			$savedNotices->data = $this->__formatNotices( $notices );

			// Retorna as noticias salvas
			return resolve( $savedNotices );

		// Quando nao tem noticia
		} else return reject( [] );
	}

	/**
	 * Salva uma noticia para ler mais tarde
	 */
	public function save_for_later( $notice_id ) {
		loggedOnly();

		// Verifica se tem a noticia
		if( $notice = $this->Notice->findById( $notice_id ) ) {

			// Tenta salvar para mais tarde
			if( $notice->saveForLater( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'A noticia informada não existe' );
	}

	/**
	 * Tira a noticia da lista para ler mais tarde
	 */
	public function unsave_for_later( $notice_id ) {
		loggedOnly();
		
		// Busca a noticia
		if ( $notice = $this->Notice->findById( $notice_id ) ) {

			// Seta o unsave
			if ( $notice->unsaveForLater( auth() ) ) {
				return resolve( 'Ação realizada com sucesso' );
			} else return reject( 'Não foi possivel realizar essa ação' );
		} else return reject( 'A noticia informada não existe' );
	}

	/**
	 * Denuncia o veiculo
	 */
	public function report( $notice_id ) {
		loggedOnly();

		// Busca o veiculo
		if( $notice = $this->Notice->findById( $notice_id ) ) {

			// Seta a denuncia
			if( $notice->report( auth() ) ) {
				return resolve( 'Açaõ realizada com sucesso' );
			} else reject( 'Não foi possivel realizar a ação' );
		} else reject( 'O Gateway informado não existe' );
	}

	/**
	 * Faz a busca das noticias pelo titulo
	 */
	public function search_notice( $string, $page = 1 ) {
		
		$query = $this->input->get( 'query' );
		$query = $query ? $query : '';

		// Seta o where
		$where = " title LIKE '%$query%' ";

		// Obtem as páginas
		$pages = $this->Notice->where( $where )->paginate( $page, 20 );
			
		// formata os dados
		$pages->data = $this->__formatNotices( $pages->data );

		// Envia os dados
		return resolve( $pages );
	}

	/**
	 * Obtem o texto da noticia
	 *
	 * @param [type] $link
	 * @return void
	 */
	private function __getText( $link ) {
		
		// Obtem a página
		$content = get_web_page( $link );

		// Verifica se existe algum erro
		if ( $content['errno'] || $content['http_code'] < 200 || $content['http_code'] > 200 ) {
			return 'Clique em "Ver original" para ver está notícia';
		}

		// Extract article directly from a URL
		$extractionResult = WebArticleExtractor\Extract::extractFromURL( $link );
	
		// Volta o texto
		return $extractionResult->text;
	}

	/**
	 * Pega uma noticia pelo ID
	 *
	 * @param [type] $notice_id
	 * @return void
	 */
	public function get( $notice_id ) {
		$notice = $this->Notice->findById( $notice_id );
		if ( !$notice ) reject( 'Nenhuma notícia encontrada' );

		// Obtem o texto da noticia
		if ( !$notice->parsed || $notice->parsed == 'N' ) {
			$text = $this->__getText( $notice->notice_link );
			$notice->text = $text;
			$notice->parsed = 'S';
			$notice->save();
		}

		// Verifica se existe um texto
		$text_parts = [];
		if ( $notice->text ) {
			$text_parts = preg_split( '/\n|\r\n?/', $notice->text );
			$text_parts = array_filter( $text_parts, function( $item ) {
				return ( strlen( trim( $item ) ) > 0 ) ? true : false;	
			});
			$text_parts = array_map( function( $value ) {
				return trim( $value );
			}, $text_parts );
			$text_parts = array_values( $text_parts );
		}

		// Verifica se a noticia foi salva para ler dps
		$saveForLater = $reported = false;
		if( auth() ){
			$saveForLater = $notice->status( auth() );
			$reported     = ( $notice->reported( auth() ) ) ? true : false ;
		}

		// Formata o JSON
		$data = [
			'id'             => $notice->id,
			'title'          => $notice->title,
			'link'           => $notice->notice_link,
			'description'    => $notice->description,
			'text_parts'     => $text_parts,
			'cover' 	     => $notice->image_link,
			'published'      => toHumanReadable( $notice->date ),
			'save_for_later' => ($saveForLater) ? 'T' : 'F',
			'reported'       => $reported
		];

		// Envia os dados
		resolve( $data );
	}
}

// End of file
