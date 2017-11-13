<?php defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Auth
 * 
 * Comandos que serão rodados no CMD
 * 
 */
class Auth_CMD extends CI_Controller {

    /**
     * construct
     * 
     * método constructor
     * 
     * @return void
     */
    public function __construct() {
        parent::__construct();

        // pega o cli
        $cli = $this->config->item( 'enable_cli' );
        if ( !$cli ) die( 'Função não está disponivel no momento.' );
    }

    /**
     * __loadAllModels
     * 
     * carrega todas las models
     *
     * @return void
     */
    private function __loadAllModels() {

        // pega todas as tabelas do banco
        $tables = $this->db->list_tables();

        // verifica se todas elas existem
        $to_load = [];
        foreach( $tables as $item ) {
            if ( file_exists( "application/models/$item/$item"."_model.php") ) {
                $to_load[] = $item;
            }
        }

        // carrega as models
        $this->load->model( $to_load );

        // retorna os nomes das models
        return array_map( function( $value ){
            return ucfirst( $value );
        }, $to_load );
    }
    
    /**
     * __createDefaultGroup
     *
     * cria o grupo padrao
     * 
     * @return void
     */
    public function __createDefaultGroup() {

        // verifica se o grupo ja existe
        $group = $this->Group->slug( 'admin' );
        if ( $group ) return $group;

        // cria um grupo
        $group = $this->Group->new();

        // seta as propriedades
        $group->name = 'Administrador';
        $group->slug = 'admin';

        // cria o grupo
        $group->save();

        // volta o grupo
        return $group;
    }

    /**
     * __createDefaultUser
     * 
     * cria o usuario padrao
     * 
     * @return void
     */
    public function __createDefaultUser() {

        // verifica se o grupo ja existe
        $user = $this->User->email( 'admin@admin.com' );
        if ( $user ) return $user;

        // cria um grupo
        $user = $this->User->new();

        // seta as propriedades
        $user->name     = 'Administrador';
        $user->email    = 'admin@admin.com';
        $user->password = 'senha123';

        // cria o grupo
        $user->save();

        // volta o grupo
        return $user;
    }

    /**
     * __fillTables
     * 
     * preenche as tabelas
     * 
     */
    private function __fillTables() {

        // carrega todas as models
        $models = $this->__loadAllModels();
        
        // pega todas as rotinas
        $rotinas = $this->Routine->find();

        // verifica se as rotinas estão vazias
        if ( count( $rotinas ) == 0 ) {

            // percorre todas as models
            foreach( $models as $model ) {

                // cria a rotina
                $rotina = $this->Routine->new();

                // seta las propriedad
                $rotina->name = $model;
                $rotina->slug = strtolower( str_replace( [' ', '_' ], '-', $model ) );

                // salva a rotina
                $rotina->save();
            }
        }
        
        // cria o grupo padrao
        $group = $this->__createDefaultGroup();

        // carrega todas as rotinas
        $rotinas = $this->Routine->find();

        // carrega todas as permissoes
        $permissions = $this->Permission->find();

        // verifica se existem permissoes
        if ( count( $permissions ) == 0 ) {

            // para cada rotina
            foreach( $rotinas as $rotina ) {
    
                // cria uma permissao
                $permission = $this->Permission->new();
    
                // seta as propriedades
                $permission->routine_id = $rotina->id;
                $permission->group_id   = $group->id;
                $permission->read       = 'S';
                $permission->create     = 'S';
                $permission->update     = 'S';
                $permission->delete     = 'S';
    
                // salva a permissao
                $permission->save();
            }
        }

        // cria um usuario
        $user = $this->__createDefaultUser();

        // verifica se ja existe associações
        $assoc = $this->User_group->find();
        if ( count( $assoc ) == 0 ) {

            // cria um novo
            $usrgrp = $this->User_group->new();

            // seta as propriedas
            $usrgrp->user_id  = $user->id;
            $usrgrp->group_id = $group->id;

            // salve
            $usrgrp->save();
        }
    }


    public function auth( $action ) {

        
        $this->__fillTables();
        print 'Autenticação iniciada com sucesso'.PHP_EOL;
    }
}

/* end of file */