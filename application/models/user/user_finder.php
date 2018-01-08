<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * User_finder
 * 
 * Finder de user
 * 
 */
class User_finder extends SG_Model {

    /**
     * entity
     *
     * entidade da tabela
     * 
     * @var string
     */
    public $entity = 'User_model';

    /**
     * api_login
     * 
     * indica se logou pela api
     *
     * @var boolean
     */
    public $apiUser = false;

    /**
     * __construct
     * 
     * Método construtor
     * 
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * email
     * 
     * busca um usuario por email
     *
     * @param [type] $email
     * @return void
     */
    public function email( $email ) {
        return $this->where( "email = '$email'" )->findOne();
    }

    /**
     * byPasswordToken
     * 
     * busca pelo token de recuperação de senha
     *
     * @param [type] $token
     * @return void
     */
    public function byPasswordToken( $token ) {
        return $this->where( "forgot_password_token = '$token'" )->findOne();        
    }

    /**
     * web_login
     * 
     * faz login pelo web
     *
     * @param [type] $email
     * @param [type] $senha
     * @return void
     */
    public function login( $email, $senha, $api = false ) {

        // pega o usuario por email
        $user = $this->email( $email );

        // verifica se existe um usuario
        if ( !$user ) return $this->errors->set_error( 001, 'Usuário não encontrado' );

        // verifica se a senha esta correta
        if ( !password_verify( $senha, $user->password ) ) {
            return $this->errors->set_error( 002, 'A senha digitada está incorreta' );
        }

        // faz o login
        if ( $api ) {
            $this->sg_auth->api_login( $user );
            $this->apiUser = $user;          
        } else {
            $this->sg_auth->login( $user );
        }

        // volta nulo
        return null;
    }
}

/* end of file */