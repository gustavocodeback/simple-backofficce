<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Crons extends SG_Controller {

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		ini_set('max_execution_time', 30000 );
		date_default_timezone_set('America/Sao_Paulo');		

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
		$rss = $this->rss->parse( $row->rss );
		if ( !$rss ) return;

		// Carrega a lista
		$this->load->model( 'notice' );
		$total = count( $rss->items );
		$splice = ( $total > 5 ) ? 5 : $total;
		$items = array_splice( $rss->items, 0, $total );

		// Percorre as noticias
		foreach( $items as $item ) {
			$notice = $this->Notice->new();
			$byLink = $this->Notice->getByLink( $item->getUrl() );

			// Verifica se já esta cadastrado
			if ( $byLink ) continue;

			try {
				// Obtem o texto da noticia
				$extractionResult = WebArticleExtractor\Extract::extractFromURL( $item->getUrl() );
			} catch( Exception $e ) {
				return ;
			}
			
			
			// Converte a data
			$datetime = $item->getPublishedDate();
			$tz = $datetime->getTimezone();
			$dateTime = new DateTime ($datetime->format( 'Y-m-d H:i:s' ), new DateTimeZone($tz->getName()));
			$dateTime->setTimezone(new DateTimeZone('America/Sao_Paulo'));
			
			// Preenche o fill
			$notice->fill([
				'gateway_id'     => $row->id,
				'title'          => $item->getTitle(),
				'notice_link'    => $item->getUrl(),
				'description'    => $item->resume,
				'image_link'     => $item->cover ? $item->cover : null,
				'default_notice' => $row->default_gateway,
				'text'           => $extractionResult->text,
				'description'    => null,
				'date'           => $dateTime->format('Y-m-d H:i:s'),
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
