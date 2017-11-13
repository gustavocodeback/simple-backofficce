<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'user_finder.php';

/**
 * user
 * 
 * Model de user
 * 
 */
class User_model extends User_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'name' => 'name',
        'email' => 'email',
        'password' => 'password',
        'token_api' => 'token_api',
        'token_session' => 'token_session',
        'forgot_password_token' => 'forgot_password_token',
        'created_at' => 'created_at',
        'updated_at' => 'updated_at',
        'logged_at' => 'logged_at',
        'login_attempts' => 'login_attempts',
        'attempt_interval' => 'attempt_interval',
        'last_attempt' => 'last_attempt',
    );

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
     * hashPassword
     * 
     * encrypta o passwors
     *
     * @param [type] $params
     * @return boolean
     */
    public function hashPassword( $params ) {
        $this->password = password_hash( $this->password, PASSWORD_BCRYPT );
    }

    /**
     * hooks
     * 
     * define os hooks da model user
     *
     * @return void
     */
    public function hooks() {
        return [
            'beforeInsert' => 'hashPassword'
        ];
    }

    /**
     * table
     *
     * pega a tabela
     * 
     * @return void
     */
    public function table() {
        return 'user';
    }

    /**
     * setPassword
     * 
     * seta uma nova senha
     *
     * @param [type] $password
     * @return void
     */
    public function setPassword( $password ) {
        $this->password = password_hash( $password, PASSWORD_BCRYPT );
    }

    /**
     * setForgotPasswordToken
     * 
     * seta o token de recuperação de senha
     *
     * @return void
     */
    public function setForgotPasswordToken() {
        $this->forgot_password_token = md5( uniqid( rand() * time() ) );
        return $this;
    }

    /**
     * incrementLoginAttemp
     * 
     * incrementa a tentativa de login
     *
     * @return void
     */
    public function incrementLoginAttempt() {
        
        // seta as tentativas
        $this->login_attempts++;
        $this->last_attempt = now();

        // salva o usuario
        $this->save();
    }

    /**
     * resetAttempts
     * 
     * reseta as tentativas de login
     *
     * @return void
     */
    public function resetAttempts() {

        // seta as tentativas
        $this->login_attempts   = 0;
        $this->last_attempt     = null;
        $this->attempt_interval = null;

        // salva as alteraçoes
        $this->save();
    }

    /**
     * authData
     * 
     * volta os dados de autenticação visiveis na api
     *
     * @return void
     */
    public function authData() {
        return [
            'id'         => $this->id,
            'name'       => $this->name,
            'email'      => $this->email,
            'token_api'  => $this->token_api,
            'logged_at'  => $this->logged_at,
        ];
    }
}

/* end of file */