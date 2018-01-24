<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Crons extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();

		// Seta o contexto
		context( strtolower( 'Crons' ) );
	}

	/**
	 * Pega os dados RSS de um gateway
	 *
	 * @param [type] $row
	 * @return void
	 */
	private function __fetchRss( $row ) {
		$this->load->library( 'rss' );
		$rss = $this->rss->load( $row->rss );

		// Verifica se carregou o status
		if ( !$rss->status ) return;

		// Carrega a lista
		$this->load->model( 'notice' );

		// Percorre as noticias
		foreach( $rss->news as $item ) {
			$notice = $this->Notice->new();
			$byLink = $this->Notice->getByLink( $item['link'] );

			// Verifica se já esta cadastrado
			if ( $byLink ) continue;

			// Obtem o texto da noticia
			$extractionResult = WebArticleExtractor\Extract::extractFromURL( $item['link'] );

			// Preenche o fill
			$notice->fill([
				'gateway_id'     => $row->id,
				'title'          => $item['title'] ? $item['title'] : null,
				'notice_link'    => $item['link'] ? $item['link'] : null,
				'image_link'     => $item['cover'] ? $item['cover'] : null,
				'default_notice' => $row->default_gateway,
				'text'           => $extractionResult->text,
				'description'    => $item['description'] ? $item['description'] : null,
				'date'           => isset( $item['pubDate'] ) ? date( 'Y-m-d H:i:s', strtotime( $item['pubDate'] ) ) : now(),
			]);
			$notice->save();
		}

		// Salva a data da atualização
		$this->settings->set( 'news_last_update', time() );
	}
	
	/**
	 * Cron JOBS para o gateway
	 *
	 * @return void
	 */
	public function fetch_rss_updates() {
		$this->load->model( [ 'gateway'] );

		// Carrega os gateways
		$this->Gateway->chunckRows( function( $row ) {
			$this->__fetchRss( $row ); 
		});
	}
}

// End of file
