<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Auth
 * 
 * Controller básico para autenticação
 * 
 */
class Auth extends SG_Controller {

	/**
	 * attempts_limit
	 * 
	 * limit de tentativa de login
	 *
	 * @var integer
	 */
	public $attempts_limit = 5;

	/**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// carrega a model de usuários
		$this->load->model( 'user' );
	}
	
	/**
	 * __validSignupForm
	 * 
	 * valida um formulário
	 *
	 * @return void
	 */
	private function __validSignupForm() {
		$rules = [
			[
				'field' => 'name',
				'label' => 'Nome',
				'rules' => 'min_length[2]|max_length[40]|required'
			], [
				'field' => 'email',
				'label' => 'E-mail',
				'rules' => 'valid_email|is_unique[user.email]|required'
			], [
				'field' => 'password',
				'label' => 'Senha',
				'rules' => 'min_length[6]|max_length[16]|required'
			]
		];

		// valida o formulário
        $this->form_validation->set_rules( $rules );
        return $this->form_validation->run();
	}

	/**
	 * __validLoginForm
	 * 
	 * valida um formulário
	 *
	 * @return void
	 */
	private function __validLoginForm() {
		$rules = [
			[
				'field' => 'email',
				'label' => 'E-mail',
				'rules' => 'valid_email|required'
			], [
				'field' => 'password',
				'label' => 'Senha',
				'rules' => 'min_length[6]|max_length[16]|required'
			]
		];

		// valida o formulário
        $this->form_validation->set_rules( $rules );
        return $this->form_validation->run();
	}

	/**
	 * __login
	 * 
	 * faz o login
	 *
	 * @param [type] $email
	 * @param [type] $senha
	 * @return void
	 */
	private function __login( $email, $senha ) {

		// carrega o usuario
		$user = $this->User->email( $email );

		// faz o login
		if ( $error = $this->User->login( $email, $senha, true ) ) {

			// verifica se esta ativo as tentativas
			if ( $this->attempts_limit && $user ) {
				$rest = $this->attempts_limit - $user->login_attempts;
				if ( $rest <= 3 ) {
					$error->message .= '<br>';
					$error->message .= 'Você ainda tem <b>'.$rest.'</b> tentativas.'; 
					$error->message .= 'Depois disso, sua conta será bloqueado por 30 minutos.';
				}
			}

			// seta a mensagem de erro
			reject(  $error->message );
			return false;
		} else {
			$this->User->apiUser->resetAttempts();
			resolve( $this->User->apiUser->authData() );
			return true;
		}
	}

	/**
	 * __checkAttempts
	 *
	 * @param [type] $user
	 * @return void
	 */
	private function __checkAttempts( $user ) {

		// verifica se a função esta habilitada
		if ( !$this->attempts_limit ) return true;

		// verifica se existe um usuário
		if ( !$user ) return true;

		// verifica se o usuário nao esta bloqueado temporariamente
		if ( $user->attempt_interval ) {
	
			// verifica se já pode fazer login
			$start = strtotime( $user->last_attempt );
			$end   = time();

			// transforma a diferença em minutos
			$diff = ( $end - $start ) / 60;

			// verifica se já passou tempo o suficiente
			if ( $diff >= $user->attempt_interval ) {

				// reseta os dados
				$user->resetAttempts();
				return true;

			} else {

				// seta os minutos restantes
				$rest = $user->attempt_interval - $diff;
				$rest = ceil( $rest );

				// seta a mensagem de erro
				$message  = 'Essa conta encontra-se temporariamente suspensa por ter ';
				$message .= 'excedido o limite máximo de tentativas de login.';
				$message .= '<br> Você poderá tentar novamente em <b>'.$rest.'</b> minutos';
				reject( $message );
				return false;
			}
		} else return true;
	}

	/**
	 * index
	 * 
	 * abre o formulário de login
	 *
	 * @return void
	 */
	public function login() {

		// cria um novo usuário
		$user = $this->User->new();
		$user->fill( $this->input->post(NULL, TRUE) ) ;
		$this->view->set( 'user', $user );

		// valida o formulário
		if ( $this->__validLoginForm() ) {
			
			// pega os dados
			$email = $this->input->post( 'email' );
			$senha = $this->input->post( 'password' );
			
			// carrega o usuario
			$user = $this->User->email( $email );

			// verifica se pode tentar logar
			if ( $this->__checkAttempts( $user ) ) {

				// faz o login
				if ( !$this->__login( $email, $senha ) ) {
					
					// verifica se existe um usuário
					if ( $user && $this->attempts_limit ) {
						$user->incrementLoginAttempt();
						if ( $user->login_attempts >= $this->attempts_limit ) {
							$user->attempt_interval = 30;
							$user->save();
						}
					}
					return;

				} else {
					if ( $this->attempts_limit ) $this->User->apiUser->resetAttempts();
					return;
				}
			}

		} else {

			// seta o usuário
			return reject( validation_errors() );
		}

		// renderiza 
		return reject( 'Erro ao logar' );
	}

	/**
	 * signup
	 * 
	 * abre o formulário de cadastro
	 *
	 * @return void
	 */
	public function signup() {

		// cria um novo usuário
		$user = $this->User->new();
		$user->fill( $this->input->post(NULL, TRUE) );

		// valida o formulário
		if ( $this->__validSignupForm() ) {
			
			// carrega o grupo padrao
			$this->load->model( 'group' );
			$group = $this->Group->defaultGroup();

			// pega a senha
			$senha = $user->password;

			// salva o usuario
			$user->save();

			// salva o grupo
			$group->putUser( $user );

			// faz o login
			return resolve( $user->authData() );

		} else {

			// seta o usuário
			return reject( validation_errors() );
		}

		return reject( 'Erro ao carregar o endpoint' );
	}

	/**
	 * forgot_password
	 * 
	 * abre o formulário de esqueci minha senha
	 *
	 * @return void
	 */
	public function forgot_password() {
		unloggedOnly();
		
		// pega o email
		$email = $this->input->post( 'email' );
		
		// verifica se é um email válido
		if ( valid_email( $email ) ) {
			
			// pega o usuário
			$user = $this->User->email( $email );
			
			// se não existir o usuário
			if ( !$user ) {
				return reject( 'E-mail não cadastrado' );
			} else {
				
				// seta o token
				$user->setForgotPasswordToken()->save();
				
				// envia o e-mail
				$this->load->library( 'email' );
				$this->email->to( $user->email, $user->name );
				$this->email->parse( 'RECOVERY_EMAIL', [ '%_TOKEN_%' => $user->forgot_password_token, '%_USER_%' => $user->name ] );
				$this->email->subject( 'Recuperação de senha '.sitename() );
				
				// seta a mensagem de sucesso
				if ( $this->email->send() ) {
					return resolve( "E-mail enviado com sucesso para <b>$user->email</b>" );
				} else {
					return reject( 'Erro ao enviar o e-mail' );
				}
			}
		} else return reject( 'E-mail incorreto' );
		
		// renderiza a view
		return reject( 'Erro ao carregar o endpoint' );
	}

	/**
	 * __saveUserImage
	 * 
	 * Salva a imagem do usuario
	 *
	 * @return void
	 */
	private function __saveUserImage( $base64 ) {
		
		// Busca a extensao e os dados da imagem
		list( $ext, $data ) = explode( ';', $base64 );
		list( , $ext )      = explode( '/', $ext );
		list( , $data ) = explode( ',', $data );

		// Seta as propriedades restantes
		$data      = base64_decode($data);
		$hash      = getToken();
		$filename  = $hash.'.'.$ext;
		$inputName = 'user_image';
		$size      = file_put_contents( 'public/uploads/'.$filename, $data );
		if( !$size ) return false;
		
		// Carrega a model e cria uma nova instancia
		$this->load->model( 'midia' );
		$midia = $this->Midia->new();

		// Seta as propriedades
		$midia->name  = $inputName;
		$midia->hash  = $hash;
		$midia->type  = 'image';
		$midia->ext   = $ext;
		$midia->size  = $size;

		// Salva a imagem no banco
		if( $midia->save() ) {
			return $midia->id;
		} else return false;
	}

	/**
	 * update_profile
	 * 
	 * Atualiza os dados do usuario
	 *
	 * @return void
	 */
	public function update_profile() {
		loggedOnly();

		// Busca o usuario
		$user = auth();

		// Pega o email
		$email = $this->input->post( 'email' ) ? 
				 $this->input->post( 'email' ) :
				 $user->email;

		// Verifica se o email foi alterado
		if( $email !== $user->email ) {

			// Verifica se o email é unico
			if( $this->User->email( $email ) ) {
				return reject( 'E-mail ja cadastrado no sistema' );
			}
			
			// Seta o email
			$user->email = $email;
		}

		// Verifica se a senha foi alterada
		if( $password = $this->input->post( 'password' ) ) {
			$user->setPassword( $password );
		}

		// seta o nome
		$user->name = $this->input->post( 'name' ) ? 
					  $this->input->post( 'name' ) : 
					  $user->name;

		// Verifica se a foto foi alterada
		if( $base64 = $this->input->post( 'image' ) ) {

			// Guarda a imagem
			if( $midia_id = $this->__saveUserImage( $base64 ) ) {
				$user->midia_id = $midia_id;
			} else return reject( 'Erro ao salvar a imagem do usuário' );
		}

		// salvar a alteração
		if( $user->save() ) {
			return resolve( $user->authData() );
		} else return reject( 'Erro ao realizar a ação' );
	}

	/**
	 * get_user_image
	 * 
	 * Pega a imagem do usuario
	 *
	 * @return void
	 */
	public function get_user_image() {
		loggedOnly();

		// Pega o usuario logado
		$user = auth();

		// Busca a imagem
		if( $user->midia_id ) {
			if( $image = $user->belongsTo( 'midia' ) ) {
				return resolve( $image->path() );
			} return reject( 'Imagem não encontrada' );
		} return reject( 'Usuario não possui imagem' );
	}
}

// End of file
