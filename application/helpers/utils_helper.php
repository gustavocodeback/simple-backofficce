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

        // verifica se é nulo
        $isn = $busca->result_array()[0]['IS_NULLABLE'];

        // volta o resultado
        return $isn === 'YES' ? true : false;
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
        return $ci->config->item( 'site_name' );
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

/* end of file */