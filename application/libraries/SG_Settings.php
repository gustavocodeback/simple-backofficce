<?php defined('BASEPATH') or exit('No direct script access allowed');

class SG_Settings {

    /**
     * ci
     * 
     * instancia do ci
     *
     * @var [type]
     */
    public $ci;

    /**
     * __construct
     * 
     * método construtor
     * 
     */
    public function __construct() {
        $this->ci =& get_instance();

        // cria a tabela
        if( !$this->ci->db->table_exists( 'sg_settings' ) ) {
            $this->__createStructure();
        }
    }

    /**
     * __createStructure
     * 
     * cria a estrutura de configurações
     *
     * @return void
     */
    private function __createStructure() {

        // cria a tabela
        $this->ci->db->query( " CREATE TABLE IF NOT EXISTS `sg_settings` (
            `id` int(11) NOT NULL,
            `key` varchar(255) NOT NULL,
            `val` text NOT NULL
          ) ENGINE=InnoDB DEFAULT CHARSET=latin1;" );

        // adiciona a chave
        $this->ci->db->query( "ALTER TABLE `sg_settings`
                                ADD PRIMARY KEY (`id`);" );
        
        // seta como alto incremento
        $this->ci->db->query(  "ALTER TABLE `sg_settings`
                                      MODIFY `id` int(11) 
                                      NOT NULL AUTO_INCREMENT; " );
    }

    /**
     * unset
     * 
     * remove um item
     *
     * @param [type] $key
     * @return void
     */
    public function unset( $key ) {
        $this->ci->db->where( 'key', $key );
        $this->ci->db->delete( 'sg_settings' );
        return $this;
    }

    /**
     * set
     * 
     * seta um item
     *
     * @param [type] $key
     * @param [type] $value
     * @return void
     */
    public function set( $key, $value ) {

        // pega o valor
        $val = $this->get( $key );

        // verifica se é um update ou um insert
        if ( $val ) {
            $this->ci->db->where( [ 'key' => $key ] );
            $this->ci->db->update( 'sg_settings', [ 'val' => $value ] );
        } else {
            $this->ci->db->insert( 'sg_settings', [ 'key' => $key, 'val' => $value ] );            
        }
    }

    /**
     * get
     * 
     * pega um item
     *
     * @param string $key
     * @return void
     */
    public function get( string $key, $default = null ) {
        
        // prepara a busca
        $this->ci->db->from( 'sg_settings' )
                 ->select( '*' )
                 ->where( " key = '$key' " );

        // faz a busca
        $busca = $this->ci->db->get();

        // verifica se existem resultados
        if ( $busca->num_rows() > 0  ) {
            return $busca->result_array()[0]['val'];
        } else return $default;
    }
};

/* end of file */