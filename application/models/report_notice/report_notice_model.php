<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'report_notice_finder.php';

/**
 * report_notice
 * 
 * Model de report_notice
 * 
 */
class Report_notice_model extends Report_notice_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'customer_id' => 'customer_id',
        'notice_id' => 'notice_id',
        'created_at' => 'created_at',
        'updated_at' => 'updated_at',
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
        2 => 'Notícia',
        3 => 'Ações',
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
        return 'report_notice';
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
                        $user = $this->User->findById( $d );

                        // Volta o resultado
                        return ( $user ) ? $user->name : 'User não encontrado';
                    }
                ),
            2 => 
                array (
                    'db' => 'notice_id',
                    'dt' => 2,
                    'formatter' => function( $d, $row ) {
                        
                        // Carrega o model de usuario
                        $this->load->model('notice');

                        // Busca o usuario
                        $notice = $this->Notice->findById( $d );

                        // Volta o resultado
                        return ( $notice ) ? 
                            '<a href="'.$notice->notice_link.'" target="_blank">'.$notice->title.'</a>'  
                            : 'Notícia não encontrada';
                    }
                ),
        );
        $columns[] = 
        [   
            'db' => 'id',
            'dt' => 3,  
            'formatter' => function( $d, $row ) {

                // Formata a data
                $del  = rmButton( 'report_notice/delete/'.$d );

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