<?php

/**
 * auth
 * 
 * verifica se o esta logado
 * 
 */
if ( ! function_exists( 'auth' ) ) {
    function auth() {

        // pega a instancia
        $ci =& get_instance();

        // verifica se o usuario esta logado
        return $ci->sg_auth->user();
    }
}


/**
 * auth
 * 
 * verifica se o esta logado
 * 
 */
if ( ! function_exists( 'send' ) ) {
    function send( $status, $data ) {
        echo json_encode( [
            'status' => $status,
            'data'   => $data
        ]);
        return;
    }
}

/**
 * resolve
 * 
 * volta os dados corretamente
 * 
 */
if ( ! function_exists( 'resolve' ) ) {
    function resolve( $data ) {
        return send( 200, $data );
    }
}

/**
 * reject
 * 
 * rejeita uma solicitaçao
 * 
 */
if ( ! function_exists( 'reject' ) ) {
    function reject( $message ) {
        return send( 500, [ 'message' => $message ] );
    }
}

/**
 * denied
 * 
 * volta acesso negado
 * 
 */
if ( ! function_exists( 'denied' ) ) {
    function denied( $message ) {
        return send( 403, [ 'message' => 'Access denied' ] );
    }
}

/**
 * get_header
 * 
 * pega um header da requisição
 * 
 */
if ( ! function_exists( 'get_header' ) ) {
    function get_header( $name ) {

        // pega a instancia
        $ci =& get_instance();

        // prepara o nome
        $f_name = strtoupper( $name );
        
        // pega pelo http
        $val = isset( $_SERVER['HTTP_'.$f_name] ) ? $_SERVER['HTTP_'.$f_name] : null;
        
        // pega pelo ci
        return $ci->input->get_request_header( $name ) ? $ci->input->get_request_header( $name ) : $val;        
    }
}


/**
 * valid_api_request
 * 
 * verifica se a requisição a api é valida
 * 
 */
if ( ! function_exists( 'valid_api_request' ) ) {
    function valid_api_request() {

        // pega a instancia
        $ci =& get_instance();

        // pega o header
        $header = get_header( 'api_key' );

        // verifica se está igual ao configurado
        if ( $header !== $ci->config->item( 'api_key' ) ) {
            reject( 'A chave da API foi configurada de forma incorreta' );
            die();
        }
    }
}

/**
 * can
 * 
 * check if a user has permission on a action of
 * a routine. If no user is specified, then the recent
 * logged user is taken as default
 * 
 */
if ( ! function_exists( 'can' ) ) { 
    function can( $actions, $routine, $user = false ) {
        
        // seta a instancia do codeignite
        $ci =& get_instance();

        // carrega as models
        $ci->load->model( [ 'routine', 'user_group', 'permission' ] );

        // verifica se é um array
        $actions = is_array( $actions ) ? $actions : [ $actions ];

        // seta o usuario
        $user = $user ? $user : auth();
        if ( !$user ) return false;

        // obtem a rotina
        $routine = $ci->Routine->findBySlug( $routine );
        if ( !$routine ) return false;

        // pega os grupos
        $groups = $ci->User_group->getByUser( $user );
        if ( !$groups ) return false;

        // percorre os grupos
        $canAccess = false;
        foreach( $groups as $group ) {

            // obtem a permissão
            $permission = $ci->Permission->byRoutineGroup( $routine->id, $group->group_id );
        
            // verifica se existe a permissao
            if ( $permission ) {

                // percorre as ações
                $all = true;
                foreach( $actions as $action ) {

                    // verifica se pode para a ação requisitada
                    if ( $permission->$action == 'N' ) {
                        $all = false;
                    }
                }

                // verifica se passou no teste
                if ( $all ) $canAccess = true;
            }
        }

        // volta a ação
        return $canAccess;
    }
}

/**
 * auth
 * 
 * verifica se o esta logado
 * 
 */
if ( ! function_exists( 'protect' ) ) {
    function protect() {

        // verifica se existe um usuário
        if ( !auth() ) {
            close_page( 'auth' );
            exit();
            return;
        } else return true;
    }
}

/* end of file */