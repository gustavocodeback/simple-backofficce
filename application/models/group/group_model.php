<?php defined('BASEPATH') OR exit('No direct script access allowed');

require_once 'group_finder.php';

/**
 * group
 * 
 * Model de group
 * 
 */
class Group_model extends Group_finder {

    /**
     * fields
     *
     * campos do model
     * 
     * @var array
     */
    public $fields = array (
        'name' => 'name',
        'slug' => 'slug',
        'created_at' => 'created_at',
        'updated_at' => 'updated_at',
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
        return 'group';
    }

    /**
     * putUser
     * 
     * coloca o usuário em um grupo
     *
     * @param [type] $user
     * @return void
     */
    public function putUser( $user ) {

        // carrega a model
        $this->load->model( 'user_group' );

        // cria a relação
        $assoc = $this->User_group->new();

        // seta os dados
        $assoc->user_id  = $user->id;
        $assoc->group_id = $this->id;

        // salva o grupo
        return $assoc->save();
    }
}

/* end of file */