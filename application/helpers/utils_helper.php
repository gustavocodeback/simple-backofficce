<?php

/**
 * array_depth
 * 
 * verifica a profundidade do array
 * 
 */
if ( !function_exists( 'array_depth' ) ) {
    function array_depth( array $array ) {

        // verifica a profundidade
        $max_depth = 1;

        // percorre o array
        foreach ( $array as $value ) {

            // verifica se é um array
            if ( is_array( $value ) ) {

                // pega a profundidade
                $depth = array_depth( $value ) + 1;

                // verifica se é maior
                if ( $depth > $max_depth ) $max_depth = $depth;
            }
        }

        // retorna a profundidade
        return $max_depth;
    }
}

/**
 * debug
 *
 * faz o debug do código
 *
 */
if ( ! function_exists( 'debug' ) ) {
    function debug( $var, $blocking = true ) {
        
        // imprime a pré visualizacao
        echo '<pre>';
    
        // verifica se é um dump bloqueante
        if ( $blocking )
            die( var_dump( $var ) );
        else
            var_dump( $var );
        
        // volta false
        return false;
    }
}

/**
 * sitename
 *
 * imprime o nome do site
 *
 */
if ( ! function_exists( 'sitename' ) ) {
    function sitename() {
        
        // Pega a instancia do CI
        $ci =& get_instance();

        // Pega o nome do site
        return $ci->config->item( 'site_name' );
    }
}

/**
 * is_nullable
 * 
 * verifica se um campo é nulo
 * 
 */
if ( ! function_exists( 'is_nullable' ) ) {
    function is_nullable( $path = 'table.column' ) {

        // pega a coluna e a tabela
        $table  = explode( '.', $path )[0];
        $column = explode( '.', $path )[1];

        // pega a instancia do ci
        $ci =& get_instance();

        // seta o banco
        $db = $ci->db->database;

        // monta a query
        $query = "SELECT IS_NULLABLE FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = '$table' AND table_schema = '$db' AND column_name LIKE '$column'";
        
        // executa a busca
        $busca = $ci->db->query( $query );

        // Verifica se existe resultado
        if ( $busca->num_rows() > 0 ) {
            
            // verifica se é nulo
            $isn = $busca->result_array()[0]['IS_NULLABLE'];

            // volta o resultado
            return $isn === 'YES' ? true : false;
        } else return false;
    }
}

/**
 * now
 * 
 * gera um novo item
 * 
 */
if ( ! function_exists( 'now' ) ) {
    function now() {
        return date( 'Y-m-d H:i:s', time() );
    }
}

/**
 * site_name
 * 
 * volta o nome do site
 * 
 */
if ( ! function_exists( 'site_name' ) ) {
    function site_name() {

        // pega a instancia do ci
        $ci =& get_instance();

        // volta o nome do site
        return $ci->config->item( 'SITE_NAME' );
    }
}

/**
 * close_page
 * 
 * fecha a página e vai para outro
 * 
 */
if ( ! function_exists( 'close_page' ) ) {
    function close_page( $path = 'auth' ) {
        redirect( $path );
        return null;
    }
}

/**
 * startsWith
 * 
 * Indica se uma string começa com uma sequencia de chars
 * 
 */
if ( ! function_exists( 'startsWith' ) ) {
    function startsWith( $haystack, $needle ) {
         $length = strlen($needle);
         return ( substr( $haystack, 0, $length ) === $needle );
    }
}

/**
 * endsWith
 * 
 * Verifica se uma string termina com uma sequencia de chars
 * 
 */
if ( ! function_exists( 'endsWith' ) ) {    
    function endsWith( $haystack, $needle ) {
        $length = strlen( $needle );
        return $length === 0 || ( substr( $haystack, -$length ) === $needle );
    }
}

/**
 * clickOpen
 * 
 * Abre um link ao ser clicado
 * 
 */
if ( ! function_exists( 'clickOpen' ) ) {
    function clickOpen( $link ) {
        return 'onclick="location.href =\''.site_url( $link ).'\'"';
    }
}

/**
 * model
 * 
 * Carrega uma model
 * 
 */
if ( ! function_exists( 'model' ) ) {
    function model( $model ) {

        // Carrega a instancia do CI
        $ci =& get_instance();

        // Carrega a model
        $ci->load->model( $model );
        $model = ucfirst( $model );

        // Volta a model carregada
        return $ci->$model;
    }
}

/**
 * utf8ize
 * 
 * Corrige strings para UTF8
 * 
 */
if ( ! function_exists( 'utf8ize' ) ) {
    function utf8ize($mixed) {
        if (is_array($mixed)) {
            foreach ($mixed as $key => $value) {
                $mixed[$key] = utf8ize($value);
            }
        } else if (is_string ($mixed)) {
            return utf8_encode($mixed);
        }
        return $mixed;
    }
}

/**
 * safe_json_encode
 * 
 * Gera um JSON seguro
 */
if ( ! function_exists( 'safe_json_encode' ) ) {
    function safe_json_encode($value, $options = 0, $depth = 512){
        $encoded = json_encode($value, $options, $depth);
        switch (json_last_error()) {
            case JSON_ERROR_NONE:
                return $encoded;
            case JSON_ERROR_DEPTH:
                return 'Maximum stack depth exceeded'; // or trigger_error() or throw new Exception()
            case JSON_ERROR_STATE_MISMATCH:
                return 'Underflow or the modes mismatch'; // or trigger_error() or throw new Exception()
            case JSON_ERROR_CTRL_CHAR:
                return 'Unexpected control character found';
            case JSON_ERROR_SYNTAX:
                return 'Syntax error, malformed JSON'; // or trigger_error() or throw new Exception()
            case JSON_ERROR_UTF8:
                $clean = utf8ize($value);
                return safe_json_encode($clean, $options, $depth);
            default:
                return 'Unknown error'; // or trigger_error() or throw new Exception()
    
        }
    }
}

/**
 * getDbSize
 * 
 * Pega o tamanho do size
 * 
 */
if ( ! function_exists( 'getDbSize' ) ) {
    function getDbSize() {
        
        // Pega a instancia do CI
        $CI = &get_instance();
        $CI->load->database();
        
        // Pega o nome do banco
        $dbName = $CI->db->database;
        $dbName = $CI->db->escape( $dbName );
        
        // Seta a query
        $sql = "SELECT table_schema AS db_name, sum( data_length + index_length ) / 1024 / 1024 AS db_size_mb 
                FROM information_schema.TABLES 
                WHERE table_schema = $dbName
                GROUP BY table_schema ;";
        
        // Executa a query
        $query = $CI->db->query( $sql );
        
        // Verifica se existe resultado
        if ( $query->num_rows() == 1 ) {
            
            // Pega o tamanho do banco
            $row = $query->row(); 
            $size = $row->db_size_mb;
            
            // Volta o tamanho
            return $size;
        } else return 0;
    }
}

/**
 * folderSize
 * 
 * Pega o tamanho de uma pasta
 * 
 */
if ( ! function_exists( 'folderSize' ) ) {
    function folderSize ( $dir ) {
        $size = 0;
        foreach ( glob( rtrim( $dir, '/' ).'/*', GLOB_NOSORT ) as $each ) {
            $size += is_file( $each ) ? filesize( $each ) : folderSize( $each );
        }
        return $size;
    }
}

/**
 * settings
 * 
 * Pega um item das configurações
 * 
 */
if ( ! function_exists( 'settings' ) ) {
    function settings( $key ) {

        // Pega a instancia do ci
        $ci =& get_instance();

        // Volta o item
        return $ci->settings->get( $key );
    }
}

/**
 * oneLine
 * 
 * Imprime uma string em uma linha
 * 
 */
if ( !function_exists( 'oneLine' ) ) {
    function oneLine( $str ) {
        $str = strip_tags( $str );
        $str = filter_var( $str, FILTER_SANITIZE_STRING );
        $str = preg_replace("/(\/[^>]*>)([^<]*)(<)/","\\1\\3",$str);
        $str = preg_replace("/[\r\n]*/","",$str);
        $str = str_replace(array("\r","\n"),"",$str);
        return trim( $str );
    }
}

/**
 * getToken
 * 
 * Pega um token aleatório
 * 
 */
if ( !function_exists( 'getToken' ) ) {
    function getToken() {
        return md5( uniqid( rand() * time() ) );
    }
}

/**
 * get_web_page
 * 
 * Pega uma pagina da web
 * 
 */
if ( !function_exists( 'get_web_page' ) ) {
    function get_web_page( $url, $cookiesIn = '' ){
        $options = array(
            CURLOPT_RETURNTRANSFER => true,     // return web page
            CURLOPT_HEADER         => true,     //return headers in addition to content
            CURLOPT_FOLLOWLOCATION => true,     // follow redirects
            CURLOPT_ENCODING       => "",       // handle all encodings
            CURLOPT_AUTOREFERER    => true,     // set referer on redirect
            CURLOPT_CONNECTTIMEOUT => 120,      // timeout on connect
            CURLOPT_TIMEOUT        => 120,      // timeout on response
            CURLOPT_MAXREDIRS      => 10,       // stop after 10 redirects
            CURLINFO_HEADER_OUT    => true,
            CURLOPT_SSL_VERIFYPEER => true,     // Validate SSL Cert
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_COOKIE         => $cookiesIn
        );

        $ch      = curl_init( $url );
        curl_setopt_array( $ch, $options );
        $rough_content = curl_exec( $ch );
        $err     = curl_errno( $ch );
        $errmsg  = curl_error( $ch );
        $header  = curl_getinfo( $ch );
        curl_close( $ch );

        $header_content = substr($rough_content, 0, $header['header_size']);
        $body_content = trim(str_replace($header_content, '', $rough_content));
        $pattern = "#Set-Cookie:\\s+(?<cookie>[^=]+=[^;]+)#m"; 
        preg_match_all($pattern, $header_content, $matches); 
        $cookiesOut = implode("; ", $matches['cookie']);

        $header['errno']   = $err;
        $header['errmsg']  = $errmsg;
        $header['headers']  = $header_content;
        $header['content'] = $body_content;
        $header['cookies'] = $cookiesOut;
    return $header;
}
}

/**
 *  An example CORS-compliant method.  It will allow any GET, POST, or OPTIONS requests from any
 *  origin.
 *
 *  In a production environment, you probably want to be more restrictive, but this gives you
 *  the general idea of what is involved.  For the nitty-gritty low-down, read:
 *
 *  - https://developer.mozilla.org/en/HTTP_access_control
 *  - http://www.w3.org/TR/cors/
 *
 */
if ( ! function_exists( 'cors' ) ) {
    function cors() {

        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }
    
        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
    
            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    
            exit(0);
        }    
    }
}

/**
 * toHumanReadable
 * 
 * Formata uma data para human readable
 * 
 */
if ( ! function_exists( 'toHumanReadable' ) ) {
    function toHumanReadable($datetime, $full = false) {
    
        $now = new DateTime;
        $ago = new DateTime($datetime);
        $diff = $now->diff($ago);
    
        $diff->w = floor($diff->d / 7);
        $diff->d -= $diff->w * 7;
    
        $string = array(
            'y' => 'ano',
            'm' => 'mês',
            'w' => 'semana',
            'd' => 'dia',
            'h' => 'hora',
            'i' => 'minuto',
            's' => 'segundo',
        );
        foreach ($string as $k => &$v) {
            if ($diff->$k) {
                $v = $diff->$k . ' ' . $v . ($diff->$k > 1 ? 's' : '');
            } else {
                unset($string[$k]);
            }
        }
    
        if (!$full) $string = array_slice($string, 0, 1);
        return $string ? implode(', ', $string) . ' atrás' : 'agora mesmo';
    }
}

/**
 * get_headers_from_url
 * 
 * Retorna os headers a partir de uma url
 * 
 */
if ( ! function_exists( 'get_headers_from_url' ) ) {
    function get_headers_from_url( $url ) {
        
        // create curl resource
        $ch = curl_init();

        // set url
        curl_setopt( $ch, CURLOPT_URL, $url );

        //return the transfer as a string
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );

        //enable headers
        curl_setopt( $ch, CURLOPT_HEADER, 1 );

        //get only headers
        curl_setopt( $ch, CURLOPT_NOBODY, 1 );

        // $output contains the output string
        $output = curl_exec( $ch );

        // close curl resource to free up system resources
        curl_close( $ch );

        $headers = array();

        $data = explode( "\n",$output );
        if( count( $data ) == 0 ) return [];

        $headers['status'] = $data[0];

        array_shift( $data );

        foreach( $data as $part ) {
            if( strpos( $part, ':' ) !== false ) {
                $middle=explode(":",$part);
                $headers[trim( $middle[0] )] = trim( $middle[1] );
            }
        }

        //return all headers
        return $headers;
    }
}

// End of file
