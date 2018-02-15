<?php defined('BASEPATH') or exit('No direct script access allowed');

use PicoFeed\Reader\Reader;
use PicoFeed\Scraper\Scraper;
use PicoFeed\Config\Config;
use PicoFeed\Reader\Favicon;


/**
 * RSS
 * 
 * Classe para leitura de links RSS
 * 
 */
class Rss {

    /**
     * ci
     * 
     * instancia do ci
     *
     * @var [type]
     */
    public $ci;

    /**
     * Status do feed RSS
     *
     * @var boolean
     */
    public $status = false;

    /**
     * Ultimo erro da classe
     *
     * @var string
     */
    public $error = '';

    /**
     * Noticias encontradas
     *
     * @var array
     */
    public $news = [];

    /**
     * __construct
     * 
     * método construtor
     * 
     */
    public function __construct() {
        $this->ci =& get_instance();
    }

    /**
     * Pega os links de imagem de uma url
     *
     * @param [type] $str
     * @return void
     */
    private function __getImageUrl( $str ) {

        // Prepara a string
        $str = json_encode( $str );
        $str = stripslashes( $str );
        $str = str_replace( '"', " ", $str );

        // Pega os provaveis pontos de link
        preg_match_all( '/.(?:JPG|PNG|GIF|jpg|png|gif)/', $str, $exts, PREG_OFFSET_CAPTURE );
        preg_match_all( '/(?:http|HTTP|https|HTTPS):\/\//', $str, $https, PREG_OFFSET_CAPTURE );

        // Verifica se é possivel ter uma imagem
        if ( count( $https ) == 0 || count( $exts ) == 0 ) return false;

        // Links de imagens possiveis
        $possibleLinks = [];
       
        // Offsets dos https
        $httpsOffsets = array_map( function( $value ){
            return $value[1];
        }, $https[0] );

        // Offsets das extensões
        $extensionsOffsets = array_map( function( $value ){
            return $value[1];
        }, $exts[0] );

        // Percorre os offsets das extensoes
        foreach( $extensionsOffsets as $extOffset ) {
            $intervals = array_map( function( $httpsOffset ) use ( $extOffset ) {
                return $extOffset - $httpsOffset;
            }, $httpsOffsets );
            $intervals = array_filter( $intervals, function( $value ) {
                return ( $value > 0 );
            });
            if ( !is_array( $intervals ) || count( $intervals ) <= 0 ) continue;
            
            // Salva o link possivel
            $length = min( $intervals );
            $start  = $extOffset - $length;
            $possibleLinks[]  = substr( $str, $start, $length+4 );
        }

        // Verifica se existem links possiveis
        return ( count( $possibleLinks ) > 0 ) ? $possibleLinks[0] : false;
    }

    /**
     * Faz o parse do XML
     *
     * @param [type] $str
     * @return void
     */
    private function __parseXML( $original ) {
        libxml_use_internal_errors( true );

        // Tenta com o CDATA removido
        $feed = str_replace( ['<![CDATA[', ']]>' ], ' ', $original );
        try {
            $xml = new SimpleXMLElement( $feed );
            return $xml;
        } catch( Exception $e ) {
            $this->status = false;
            $this->error = $e->getMessage();
        }

        // Tenta converter diretamente
        try {
            $xml = new SimpleXMLElement( $original );
            return $xml;
        } catch( Exception $e ) {
            $this->status = false;
            $this->error = $e->getMessage();
        }

        // Faz o encode
        $original = utf8_encode( $original );
        try {
            $xml = new SimpleXMLElement( $original );
            return $xml;
        } catch( Exception $e ) {
            $this->status = false;
            $this->error = $e->getMessage();
        }

        // Volta false
        return false;
    }

    /**
     * Carrega um feed RSS
     *
     * @param [type] $url
     * @return void
     */
    public function load( $url ) {
        
        // Carrega a URL
        $feed = get_web_page( $url );
        if ( !isset( $feed['content'] ) && is_string( $feed['content'] ) ) return;

        // Converte o XML para array
        $xml = $this->__parseXML( $feed['content'] );
        if ( is_bool( $xml ) ) return $this;

        // Verifica se existe o canal
        if ( !isset( $xml->channel ) ) {
            $this->status = false;
            $this->error = 'O feed RSS é inválido';
            return $this;
        }; 

        // Array com as noticias
        $news = [];
           
        // Percorre as entradas
        foreach( $xml->channel->item as $entry ) {

            // Pega a capa
            $entry->cover = $this->__getImageUrl( $entry );

            // Verifica se existe tag de midia
            $midia = $entry->children( 'media', true )->thumbnail;
            if( $midia && $midia->attributes() ) {
                $md = $midia->attributes();
                $entry->cover = $md->url;
            }
            $midia = $entry->children( 'media', true )->content;
            if( $midia && $midia->attributes() ) {
                $md = $midia->attributes();
                $entry->cover = $md->url;
            }
            
            // Adiciona a noticia
            $news[] = json_decode( json_encode( $entry ), TRUE );
        }

        // Faz o mapping das noticias
        $news = array_map( function( $value ) {
            $value['description'] = isset( $value['description'] ) ? $value['description'] : '';

            // Limpa a descrição
            if ( is_array( $value['description'] ) ) $value['description'] = '';
            if ( is_array( $value['title'] ) ) $value['title'] = false;

            // Limpa a descrição
            if ( is_string( $value['description'] ) ) {
                $value['description'] = trim( strip_tags( $value['description'] ) );
            }

            // Arruma a capa
            $value['cover'] = ( count( $value['cover'] ) == 0 ) ? false : $value['cover'];

            // Volta o valor
            return $value;
        }, $news );

        // Retira os que não contemplatam os itens fundamentais
        $this->news = array_filter( $news, function( $value ) {
            return ( $value['title'] );
        });

        // Seta o status como true
        $this->status = true;

        // Volta a instancia
        return $this;
    }

    /**
     * Para cada uma das noticias encontradas
     *
     * @param [type] $callback
     * @return void
     */
    public function forEachRow( $callback ) {
        foreach( $this->news as $new ) $callback( $new );
    }

    /**
     * Encontra os links RSS de uma página
     *
     * @param [type] $url
     * @return void
     */
    public function findLinks( $location ) {
        if ( $html = @DOMDocument::loadHTML( file_get_contents( $location ) ) ) {

            // Carrega o DOM
            $xpath = new DOMXPath($html);
            $feeds = $xpath->query("//head/link[@href][@type='application/rss+xml']/@href");
            
            // Encontra os resultados
            $results = [];
            foreach( $feeds as $feed ) {
                $results[] = $feed->nodeValue;
            }
            
            // Volta os links encontrados
            return $results;
        }
        return false;
    }

    /**
     * Obtem o favicon da página
     *
     * @param [type] $url
     * @return void
     */
    public function get_favicon( $url ) {
        $favicon = new Favicon;
        $icon_link = $favicon->find( $url );
        return $icon_link;
    }

    /**
     * Pega o cover de uma imagem
     *
     * @param [type] $item
     * @return void
     */
    private function __getCover( $item ) {

        // Possiveis lugares para achar a imagem
        $possibleTags  = [ 'media', 'media:enclosure', 'media:content' ];
        $possibleLinks = [];

        // Verifica se existe a tag media
        if( $item->hasNamespace('media') ) {
            foreach( $possibleTags as $tag ) {
                $values = $item->getTag( $tag, 'url' );
                if ( count( $values ) > 0 ) {
                    foreach( $values as $key => $value ) {
                        $headers = get_headers_from_url( $value );
                        if( !isset( $headers['Content-Type'] ) ) return null;
                        if( is_string( $headers['Content-Type'] ) ) {
                            if ( strpos($headers['Content-Type'], 'image/') === false ) {
                                unset( $values[$key] );
                            }
                        }
                    }
                    $possibleLinks = array_merge( $possibleLinks, $values );
                }
            }
        }

        // Verifica o enclose
        if ( !empty( $item->getEnclosureUrl() ) && strpos( $item->getEnclosureType(), 'image' ) !== false ) {
            $possibleLinks[] = $item->getEnclosureUrl();
        } 

        // Verifica se já encontrou uma imagem
        if ( count( $possibleLinks ) == 0 ) {
            if ( $img = $this->__getImageUrl( $item->getContent() ) )
                $possibleLinks[] = $img;
        }

        return isset( $possibleLinks[0] ) ? $possibleLinks[0] : null;
    }

    /**
     * Obtem o resumo
     *
     * @param [type] $item
     * @return void
     */
    private function __getDescription( $item ) {
        $html = $item->getContent();
        if ( !$html ) return null;

        // Obtem o primeiro paragrafo
        $start     = strpos( $html, '<p>' );
        $end       = strpos( $html, '</p>', $start );
        $paragraph = substr( $html, $start, $end-$start+4 );
        
        // Volta somente o texto
        return html_entity_decode(strip_tags($paragraph));
    }

    /**
     * Faz o parse de uma url RSS
     *
     * @param [type] $url
     * @return void
     */
    public function parse( $url ) {
        try {

            $reader = new Reader;
            $resource = $reader->discover( $url );

            $parser = $reader->getParser(
                $resource->getUrl(),
                $resource->getContent(),
                $resource->getEncoding()
            );

            if ( $feed = $parser->execute() ) {
                foreach( $feed->items as $key => $item ) {
                    $feed->items[$key]->cover = $this->__getCover( $item );
                    $feed->items[$key]->resume = $this->__getDescription( $item );
                }
                return $feed;

            } else return null;
        }
        catch (Exception $e) {
            // Do something...
        }
    }
};

// End of file