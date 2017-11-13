<?php defined('BASEPATH') OR exit('No direct script access allowed');

use PHPMailer\PHPMailer\PHPMailer;

/**
* MY_Email
*
* cuida do envio de emails
*
*/
class SG_Email extends PHPMailer {

    // instancia do ci
    public $ci;

    // email que enviou
    public $emailEnvio;

    // usuario que enviou
    public $usuarioEnvio;

    // assunto do email
    public $assunto;

    // para quem será enviado
    public $para;

    // nome de quem receberá o email
    public $paraNome;

    // seta o kind
    public $kind = [];

   /**
    * __construct
    *
    * metodo construtor
    *
    */
    public function __construct() {

        // pega a instancia do codeigniter
        $this->ci =& get_instance();

        // carrega o arquivo de configurações
        $this->ci->config->load( "email" );

        // parametriza o phpmailer
        $this->From     = ( isset($params["from"] )      ? $params["from"]      : $this->ci->config->item("from"));
        $this->Sender   = ( isset($params["from"] )      ? $params["from"]      : $this->ci->config->item("from"));
        $this->FromName = ( isset($params["from_name"] ) ? $params["from_name"] : $this->ci->config->item("from_name"));
        $this->Port     = ( isset($params["port"] )      ? $params["port"]      : $this->ci->config->item("port"));
        parent::SetLanguage("br");
        $this->CharSet = 'UTF-8';
        
        // verifica se deve adicionar o replyTo
        if(isset($params["from"]) && isset($params["from_name"]))
            $this->AddReplyTo($params["from"], $params["from_name"]);

        // seta as opções de SMTP
        parent::IsSMTP(true);
        parent::IsHTML(true);
        $this->SMTPAuth = true;
        $this->Host     = $this->ci->config->item("host");
        $this->Username = (isset($params["username"]) ? $params["username"] : $this->ci->config->item("username"));
        $this->Password = (isset($params["password"]) ? $params["password"] : $this->ci->config->item("password"));
    }
    
   /**
    * from
    *
    * seta quem enviou
    *
    */
    public function from( $emailEnvio = '', $usuarioEnvio = '', $return_path = NULL ) {
        return $this;        
        $this->From     = $emailEnvio;
        $this->FromName = $usuarioEnvio;
    }

   /**
    * subject
    *
    * seta o assunto do email
    *
    */
    public function subject( $sub = '' ) {

        // seta o assunto
        $this->Subject = $sub;

        // chama a funcao pai
        return $this;
    }

   /**
    * to
    *
    * seta o usuário destinatário
    *
    */
    public function to( $email = '', $name = '' ) {

        // seta o to
        $this->para     = $email;
        $this->paraNome = $name;

        // volta a instancia
        return $this;
    }

   /**
    * send
    *
    * envia o email
    *
    */
    public function send( $auto_clear = true ) {

        // prepara os dados para salvar no banco
        $dados = [
            'Para'         => $this->para,
            'EmailEnvio'   => $this->From,
            'UsuarioEnvio' => $this->FromName,
            'Corpo'        => $this->Body,
            'Assunto'      => $this->Subject,
            'Data'         => date( 'Y-m-d H:i:s', time() )
        ];

        // seta para quem será enviado
        parent::AddAddress( $this->para, $this->paraNome );

        // seta o status
        $status = parent::Send();

        // limpa os destinatários
        parent::ClearAddresses();

        // seta o status do envio
        $dados['Status'] = $status ? 'S' : 'N';

        // volta o status
        return $status;
    }

   /**
    * message
    *
    * seta o corpo da mensagem
    *
    */
    public function message( $corpo ) {
        
        // seta o corpo
        $this->Body = $corpo;
        
        // volta a instancia
        return $this;
    }

    /**
     * render
     * 
     * renderiza o template
     *
     * @param string $template
     * @param [type] $data
     * @return void
     */
    public function render( string $template, $data ) {

        // seta o corpo
        $this->Body = $this->ci->view->html( 'emails/'.$template, $data );

        // volta a instancia
        return $this;
    }

   /**
    * set_mailtype
    *
    * seta o corpo da mensagem
    *
    */
    public function set_mailtype( $type ) {
        return $this;
    }
}

/* end of file */