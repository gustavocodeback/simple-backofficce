<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Crons extends SG_Controller {

	/**
	 * Hora que iniciou
	 * 
	 */
	public $starded;

	/**
	 * Quando o loop atual começou
	 *
	 * @var [type]
	 */
	public $init;

	/**
	 * Execusoes realizadas
	 *
	 * @var array
	 */
	public $executions = [];

	/**
	 * Método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		$this->started = time();
		$this->load->model( ['gateway', 'notice' ] );
		$this->load->library( 'rss' );
		ini_set( 'max_execution_time', 300 );
		date_default_timezone_set('America/Sao_Paulo');
	}

	/**
	 * Volta o tempo que o script está executando
	 *
	 * @return void
	 */
	private function running() {
		return time() - $this->started;
	}

	/**
	 * Volta o tempo que ainda sobra para o script executar
	 *
	 * @return void
	 */
	private function left() {
		return ini_get( 'max_execution_time' ) - 10 - $this->running();
	}

	/**
	 * Pega os dados RSS de um gateway
	 *
	 * @param [type] $row
	 * @return void
	 */
	private function __fetchRss( $row ) {
		$rss = $this->rss->parse( $row->rss );
		if ( !$rss ) return;

		// Percorre as noticias
		foreach( $rss->items as $item ) {
			$notice = $this->Notice->new();
			$byLink = $this->Notice->getByLink( $item->getUrl() );

			// Verifica se já esta cadastrado
			if ( $byLink ) continue;
			
			/* try {
				// Obtem o texto da noticia
				$extractionResult = WebArticleExtractor\Extract::extractFromURL( $item->getUrl() );
			} catch( Exception $e ) {
				return ;
			} */
			
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
				'text'           => null,
				'description'    => null,
				'date'           => $dateTime->format('Y-m-d H:i:s'),
			]);
			$notice->save();
		}
	}
	
	/**
	 * Insere o next
	 *
	 * @return void
	 */
	private function getNext() {

		// Obtem o ultimo ID processado
		$last_id = $this->settings->get( 'last_inserted_id', '0' );
		$last_id = empty( $last_id ) ? '0' : $last_id;

		// Obtem o gateway
		$gateway = $this->Gateway->next( $last_id );
		if ( !$gateway ) {
			$gateway = $this->Gateway->next( '0' );
		};
		$this->settings->set( 'last_inserted_id', $gateway->id );

		// Volta o gateway
		return $gateway;
	}

	/**
	 * Indica que o loop iniciou
	 *
	 * @return void
	 */
	function start() {
		$this->init = time();
	}

	/**
	 * Indica que o loop acabou
	 *
	 * @return void
	 */
	function end(){
		$end = time() - $this->init;
		$this->executions[] = $end;
	}

	/**
	 * Pega a media de execução
	 *
	 * @return void
	 */
	function media() {
		return array_sum( $this->executions ) / count( $this->executions );
	}

	/**
	 * Cron JOBS para o gateway
	 *
	 * @return void
	 */
	public function fetch_rss_updates() {
		$media = 0;
		$execucoes = 0;
		while( $this->left() > ( 2 * $media ) ) {
			$gateway = $this->getNext();
			$this->start();
			$this->__fetchRss( $gateway );
			$this->end();
			$media = $this->media();
			$execucoes++;
		}
		$this->settings->set( 'execution_time_per_time', $media );
		$this->settings->set( 'executions_in_period', $execucoes );
		$this->settings->set( 'execution_time_duration', $this->running() );
		$this->settings->set( 'last_cron_time', date( 'Y-m-d H:i:s', time() ) );
	}

	/** 
	 * Faz a sincronização forçada de um gateway
	 * 
	 */
	public function force_sync( $id ) {
		if ( $gateway = $this->Gateway->findById( $id ) ) {
			$this->__fetchRss( $gateway );
			echo 'Sincronização feita com sucesso';
		} else echo 'Nenhum gateway encontrado';
	}
}

// End of file
