<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Feed_pessoal extends SG_Controller {

    /**
	 * __construct
	 * 
	 * método construtor
	 * 
	 */
	public function __construct() {
		parent::__construct();
		valid_api_request();

		// carrega a model de veiculos de noticias
		$this->load->model( [ 'customer_gateway', 'personal_category', 'gateway', 'category' ] );
    }

    /**
     * Busca o veiculo de noticias
     * 
     */
    private function __gatewayData( $gateway_id, $personal_category = false ) {

        // Busca o gateway
        $gateway = $this->Gateway->findById( $gateway_id );
        if( !$gateway ) return;

        // Prepara os dados
        if( $personal_category ) {
            $dataGateway = [
                'id'   => $gateway_id,
                'name' => $gateway->name
            ];
        } else {
            $dataGateway = [
                'id'          => $gateway_id,
                'name'        => $gateway->name,
                'category_id' => $gateway->category_id
            ];
        }

        // Retorna o veiculo 
        return $dataGateway;
    }

    /**
     * Busca o nome das categorias
     * 
     */
    private function __getCategoriesName( $dados, $categoriaPessoal = false ) {

        // Percorre o array
        foreach( $dados as $key => $dado ) {

            // Busca a categoria
            if( $categoriaPessoal ) {
                $categoria = $this->Personal_category->findById( $key );                
            } else {
                $categoria = $this->Category->findById( $key );
            }

            // Reorganiza o array
            $new_arr[] = [ 'categoria' => $categoria->name, 
                           'gateways' => $dado   ];
        }

        // Retorno
        return $new_arr;
    }
    
    /**
     * Busca o feed pessoal do usuário
     *
     * @return void
     */
    public function get_user_follows() {
        loggedOnly();

        // Busca os follows
        $follows = $this->Customer_gateway->where( "customer_id = ".auth()->id )->find();
        if( !$follows ) return reject( [] );
        
        // Inicializa as variaveis
        $gateways           = [];
        $feedPessoal        = [];
        $categoriasPessoais = [];

        // Percorre os follows
        foreach( $follows as $follow ) {
            
            // Verifica se tem categoria pessoal
            if( $follow->personal_category_id ) {

                // Busca os dados do gateway
                $gateway = $this->__gatewayData( $follow->gateway_id, true );
                if( !$gateway ) break;
                 
                // Relaciona os gateways a sua respectiva gategoria pessoal
                $categoriasPessoais[$follow->personal_category_id][] = $gateway;
            } else {

                // Recebe o gateway
                $gateway = $this->__gatewayData( $follow->gateway_id, false );
                if( !$gateway ) break;

                // Organiza o array
                $gateways[$gateway['category_id']][] = [ 'id' => $gateway['id'],
                                                         'name' => $gateway['name'] ];
            }
        }

        // Busca o nome das categorias
        if( $categoriasPessoais ) { 
            $categoriasPessoais = $this->__getCategoriesName( $categoriasPessoais, true );
        }
        if( $gateways ) {
            $gateways = $this->__getCategoriesName( $gateways );
        }

        // Faz merge se necessario e define o feed pessoal
        if( $categoriasPessoais && $gateways ) {    
            $feedPessoal = array_merge( $categoriasPessoais, $gateways );
            
        } else {
            $feedPessoal = ( $categoriasPessoais ) ? $categoriasPessoais : $gateways;
        }

        // Retorno
        return ( $feedPessoal ) ? resolve( $feedPessoal ) : reject( $feedPessoal );
    }
}

// End of file