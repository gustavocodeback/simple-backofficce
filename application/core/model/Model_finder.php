<?php defined('BASEPATH') or exit('No direct script access allowed');

require_once 'Model_alter.php';

/**
 * Model_finder
 * 
 * responsavel por realizar queries e ordenação no banco de dados
 * 
 */
class Model_finder extends Model_alter
{

    /**
     * count
     *
     * contagem dos registros encontrados
     *
     * @var integer
     */
    public $count = 0;

    /**
     * chain
     *
     * indica se deve fazer o encadeamento do métodos
     * 
     * @var boolean
     */
    public $chain = false;

    /**
     * offset
     *
     * offset a ser buscado
     *
     * @var integer
     */
    public $offset = 0;

    /**
     * perPage
     *
     * quantidade de registros por página
     *
     * @var integer
     */
    public $perPage = 20;

    /**
     * cacheWhere
     *
     * string com o where cacheado
     *
     * @var string
     */
    public $whereClause = '';

    /**
     * cache
     * 
     * cache da busca realizada
     *
     * @var [type]
     */
    public $cache = null;

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
     * start
     * 
     * inicia o encadeamento de métodos
     *
     * @return void
     */
    public function start() {
        $this->whereClause = '';
        $this->chain = true;
        return $this;
    }

    /**
     * endchain
     *
     * @return void
     */
    public function end() {
        $this->chain = false;
        return $this;
    }

    /**
     * find
     * 
     * encontra os registros
     *
     * @param boolean $from
     * @return void
     */
    public function find( $from = true ) {
        $this->end();
        return $this->get( false, $from );
    }

    /**
     * findOne
     *
     * encontra um registro
     * 
     * @param boolean $from
     * @return void
     */
    public function findOne( $from = true ) {
        $this->end();
        return $this->get( true, $from );
    }

    /**
     * key
     *
     * busca a entidade pela chave
     *
     */
    public function findById( $id, $alias = false, $from = true ) {
        
        // limpa o where
        $this->whereClause = '';

        // seta o alias
        $alias = $alias ? $alias.'.': '';

        // verifica se uma chave foi setada
        $this->where( " $alias"."id = $id " );
        
        // volta  a instancia
        $this->end();
        return $this->findOne( $from );
    }

    /**
     * getCount
     *
     * pega a contagem das linhas
     *
     */
    public function getCount( $query ) {
        
        // prepara a busca
        $this->db->flush_cache();

        // retira os dados
        $quering = explode( 'FROM', $query );
        $quering = explode( 'LIMIT', $quering[1] );
        $quering = 'SELECT count( * ) as total FROM '.$quering[0];

        // executa a query
        $src = $this->db->query( $quering );

        // seta o contador
        return $src->result_array()[0]['total'];
    }

    /**
     * where
     *
     * define os filtros para uma busca
     *
     */
    public function where( $clause ) {
        
        // verifica se ja existe algum conteudo no where
        if ( empty( $this->whereClause ) ) {
            $this->whereClause = $clause;
        } else {
            $this->whereClause .= " AND ".$clause;            
        }

        // volta a instancia
        return $this;
    }

    /**
     * get
     *
     * faz a busca
     *
     */
    public function get( $only = false, $setFrom = true ) {
                
        // seta a tabela
        if ($setFrom) $this->db->from( $this->table() );
        
        // monta o where
        if (!empty( $this->whereClause )) $this->db->where( $this->whereClause );
        
        // faz a busca
        $busca = $this->db->get();
        
        // verifica se existem resultados
        if ($busca->num_rows() > 0) {
            
            // pega os resultados
            $result = $busca->result_array();
        
            // verifica se deve pegar somente um
            if ( $only ) {

                // pega o primeiro resultado
                $first = $result[0];
        
                // instancia uma nova entidade
                $entity = $this->new();
        
                // faz o parse
                $entity->load( $first );
                
                // limpa o where
                $this->end()->whereClause = '';

                // retorna a entidade
                return $entity;
            }
        
            // seta o array de retorno
            $response = [];
        
            // percorre todos os resultados
            foreach ( $result as $item ) {

                // instancia uma nova entidade
                $entity = $this->new();
        
                // faz o parse
                $entity->load( $item );
        
                // retorna a entidade
                $response[] = $entity;
            }
            
            // limpa o where
            $this->end()->whereClause = '';

            // retorna os resultados encontrados
            return $response;
                
        // volta nulo por padrao
        } else { 

            // limpa o where
            $this->end()->whereClause = '';
            return null;
        };
    }

    /**
     * paginate
     *
     * pagina os resultados
     *
     */
    public function paginate( $page = 0, $qtde = 20, $from = true ) {
        
        // seta a tabela
        if ($from) $this->db->from( $this->table() );
        
        // seta os resultados como zero
        $this->count = 0;

        // seta a pagina
        $this->page   = $this->input->get( 'page' ) ? $this->input->get( 'page' ) : $page;
        $this->offset = ( $page - 1 ) * $qtde;

        // seta a quantidade por pagina
        $this->perPage = $qtde;

        // seta o offset
        $this->offset = $this->offset < 0 ? 0 : $this->offset;

        // seta o limite
        $this->db->limit( $this->perPage, $this->offset );

        // monta o where
        if ( !empty( $this->whereClause ) ) $this->db->where( $this->whereClause );

        // chama o get
        $src = $this->db->get();

        // verifica se existem resultado
        if ( $src->num_rows() > 0 ) {
            
            // seta o cache
            $this->cache = $src->result_array();
            
            // faz a contagem
            $query      = $this->db->last_query();
            $total      = $this->getCount( $query );
            $total_page = ceil( $total / $this->perPage );
            
            // volta o objeto de paginação
            return (object) [
                'page'        => $page,
                'total_pages' => $total_page,
                'total_itens' => $total,
                'data'        => $this->get()
            ];

        } else return (object) [
            'page'        => $page,
            'total_pages' => 0,
            'total_itens' => 0,
            'data'        => []
        ];
    }
}

/* end of file */
