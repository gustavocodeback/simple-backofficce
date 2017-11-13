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

    /**
     * __rollback
     * 
     * faz o rollback da autenticação
     *
     * @return void
     */
    private function __rollback() {

        // arquivos de autor
        $auth_files = [
            'application/models/user',
            'application/models/group',
            'application/models/permission',
            'application/models/routine',
            'application/models/user',
            'application/models/user_group',
            'application/controllers/api/Auth.php',
            'application/controllers/web/Auth.php',
            'application/controllers/web/Home.php',
            'application/helpers/auth_helper.php',
            'application/libraries/SG_auth.php',
            'application/views/components/navbar.blade.php',
            'application/views/components/sidebar.blade.php',
            'application/views/emails/recovery.blade.php',
            'application/views/pages/auth',
            'application/views/pages/home.blade.php',
            'application/libraries/SG_Auth.php'
        ];
        
        // exclui os arquivos
        foreach( $auth_files as $file ) {
            print "Apagando $file ...".PHP_EOL;
            passthru( "rm -Rf $file " );
        }

        // mensagem
        print "Copiando arquivos ".PHP_EOL;

        // mova os arquivos
        passthru( " cp application/core/templates/no-auth/config/autoload.php application/config/ " );
        passthru( " cp application/core/templates/no-auth/controllers/Welcome.php application/controllers/ " );
    
        // remove as tabelas
        $this->load->dbforge();
        $this->dbforge->drop_table( 'user', TRUE );
        $this->dbforge->drop_table( 'group', TRUE );
        $this->dbforge->drop_table( 'routine', TRUE );
        $this->dbforge->drop_table( 'permission', TRUE );
        $this->dbforge->drop_table( 'user_group', TRUE );
        $this->dbforge->drop_table( 'user', TRUE );
    }

    /**
     * __lift
     * 
     * prepara a autenticacao
     * 
     *
     * @return void
     */
    private function __lift() {
        passthru( "php maker auth setup && php maker migrate && php maker auth fill" );
    }

    /**
     * auth
     * 
     * comandos relacionados a autenticacao
     *
     * @param [type] $action
     * @return void
     */
    public function auth( $action ) {

        switch( $action ) {
            case 'rollback':
                $this->__rollback();
            break;
            case 'setup':
                passthru( " cp -Rf application/core/templates/auth/* application/ " );
                print 'Autenticação iniciada com sucesso'.PHP_EOL;
            break;
            case 'fill':
                $this->__fillTables();
                print 'Tabelas preenchidas'.PHP_EOL;
            break;
            case 'lift':
                $this->__lift();
                print 'Autenticação setada com sucesso'.PHP_EOL;
            break;
        }
    }
}

/* end of file */