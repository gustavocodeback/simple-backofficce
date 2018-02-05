<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Quick_insert extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		$this->load->model( [ 'category', 'region' ] );
		setTitle( 'Inserção rápida' );

		// Seta o contexto
		setItem( 'categories', $this->Category->find() );
		setItem( 'regions', $this->Region->find() );
		sidebar( 'Inserção rápida' );
		context( 'home' );
	}
	
	/**
	 * index
	 * 
	 * método inicial
	 *
	 * @return void
	 */
	public function index() {
		if ( $id = flash( 'addedGatewayId' ) ) {
			$this->load->model( 'gateway' );
			$gateway = $this->Gateway->findById( $id );
			setItem( 'addedGateway', $gateway );
		}

		view( 'quick_insert/quick_insert' );
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
	 * Salva o gateway
	 * 
	 * @return void
	 */
	public function save_gateway() {
		$this->load->model( [ 'gateway' ] );

		// Seta a opção padrão
		$defaultFlag = $this->input->post( 'default-gateway' ) ? 'S' : 'N';

		// Verifica se deve usar a imagem padrão
		$midia = null;
		if ( $this->input->post( 'default-midia' ) ) {
			$image_link = $this->input->post( 'default-logo' );
			$midia = $this->__saveDefaultMidia( $image_link );
		}
		$midia = $midia ? $midia->id : $this->input->post( 'midia' );

		// Cria um novo gateway
		$gateway = $this->Gateway->new();
		$gateway->fill([
			'region_id'       => $this->input->post( 'region_id' ),
			'category_id'     => $this->input->post( 'category_id' ),
			'midia_id'        => $midia,
			'name'            => $this->input->post( 'font-name' ),
			'url'             => $this->input->post( 'site-url' ),
			'rss'             => $this->input->post( 'rss-link' ),
			'default_gateway' => $defaultFlag
		]);

		// Salva o gateway
		if ( $gateway->save() ) {

			// Seta a mensagem
			flash( 'addedGatewayId', $gateway->id );
			flash( 'swaSuccessBody', 'Fonte adicionada com sucesso' );
		} else {

			// Seta a mensagem
			flash( 'swaErrorBody', 'Erro ao salvar a fonte' );
		}
		redirect( site_url( 'quick_insert' ) );
	}

	/**
	 * Faz a busca pelo Link RSS
	 *
	 * @return void
	 */
	public function parse( $url = null ) {
		
		// Carrega a library
		$this->load->library( 'rss' );
		
		// Obtem o link enviado por post
		$link = $url ? $url : $this->input->post( 'query' );

		// Verifica se é uma URL Feedly
		if ( strpos( $link, 'feedly' ) !== false ) {
			$parts = explode( 'http', $link );
			$link = 'http'.urldecode( end( $parts ) );
		}

		// Obtem os links RSS da página
		$feed = $this->rss->parse( $link );
		if ( !$feed ) {
			flash( 'swaErrorBody', 'Nenhum feed encontrado' );
			return redirect( site_url( 'quick_insert' ) );
		}
		
		// Seta a url da imagem
		$image_link = null;
		if ( $feed )
			$image_link = 	$feed->getLogo() ? 
							$feed->getLogo() : 
							$this->rss->get_favicon( $feed->getSiteUrl() );

		// seta as variaveis
		setItem( 'feed', $feed );
		setItem( 'image_link', $image_link );
		setItem( 'query', $link );

		// Carrega a página
		view( 'quick_insert/quick_insert' );
	}
}

// End of file
