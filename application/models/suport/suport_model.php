<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'suport_finder.php';

/**
 * suport
 * 
 * Model de suport
 * 
 */
class Suport_model extends Suport_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
  'customer_id' => 'customer_id',
  'subject' => 'subject',
  'message' => 'message',
);

    /**
     * visibles
     * 
     * Campos visiveis no grid
     *
     * @var array
     */
    public $visibles = array (
        0 => 'ID',
        1 => 'Usuário',
        2 => 'Assunto',
        3 => 'Mensagem',
        4 => 'Ações',
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
     * table
     *
     * pega a tabela
     * 
     * @return void
     */
    public function table() {
        return 'suport';
    }

    /**
     * main
     * 
     * Pega o campo principal
     *
     * @return void
     */
    public function main() {
        return $this->id;
    }

    /**
     * columns
     * 
     * Colunas para o DataTables
     *
     * @return void
     */
    public function DataTables() {
        
        // Carrega a library
        $this->load->library( 'DataTables' );

        // Columns
        $columns = array (
            0 => 
            array (
                'db' => 'id',
                'dt' => 0,
            ),
            1 => 
            array (
                'db' => 'customer_id',
                'dt' => 1,
                'formatter' => function( $d, $row ) {
                    
                    // Carrega o model de usuario
                    $this->load->model('user');

                    // Busca o usuario
                    $user = null;
                    if( $d ) $user = $this->User->findById( $d );

                    // Volta o resultado
                    return ( $user ) ? $user->name : 'Anonimo';
                }
            ),
            2 => 
            array (
                'db' => 'subject',
                'dt' => 2,
            ),
            3 => 
            array (
                'db' => 'message',
                'dt' => 3,
            ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 4,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'suport/delete/'.$d );

                // Volta os botões
                return $del;
            }
        ];

        // Volta o resultado
        return $this->datatables->send( $this->table(), $columns );
    }

    /**
     * permissions
     * 
     * Volta o array de permissões
     *
     * @return Array
     */
    public function permissions() {
        return [
            'add'    => [ 'any' ],
            'edit'   => [ 'any' ],
            'delete' => [ 'any' ],
            'read'   => [ 'any' ]
        ];
    }
}

// End of file