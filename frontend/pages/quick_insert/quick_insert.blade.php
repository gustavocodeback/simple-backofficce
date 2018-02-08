@extends('layouts.admin')
@section('content')
    <div id="quick_insert">
        <div class="col bg-light z-depth-1 rounded pb-3">
                
            <div class="page-header">
                <h2>Inserção rápida</h2>
            </div>

            <form method="POST" action="{{ site_url( 'quick_insert/parse' ) }}" class="row">
                <div class="col p-3">
                    <div class="input-group">
                        <input  type="text" 
                                class="form-control" 
                                placeholder="Informe um link RSS"
                                value="{{ isset( $query ) ? $query : '' }}"
                                name="query">
                        <span class="input-group-btn">
                            <button class="btn btn-primary">Pesquisar!</button>
                        </span>
                    </div>
                </div>
            </form><!-- formulário de pesquisa -->

            @if( isset( $addedGateway ) && $addedGateway )
            <div class="row">
                <div class="col">
                    <div class="alert alert-success">
                        <b>{{ $addedGateway->name }}</b> foi adicionado com sucesso como uma fonte do Simple.
                        <br>
                        Para editar essa fonte, 
                        <a href="{{ site_url( 'gateway/list/'.$addedGateway->category_id.'?addModal=true&id='.$addedGateway->id ) }}">clique aqui</a>
                    </div>
                </div>
            </div>
            @endif

            <form action="{{ site_url( 'quick_insert/save_gateway' ) }}" method="POST" class="row">
                <div class="col p-5">
                    @if( isset( $feed ) )
                        @if( $feed )
                        <h3>Portal</h3>
                        
                        <div class="row">
                            <div class="col-4">
                                <div  class="midiaInput" data-size="1" data-ratio="1:1">

                                <label class="d-block pt-2">Logo</label>

                                <div v-if="picked.length > 0" class="row pr-2 pl-2">
                                <div  v-for="(midia, key) in picked" 
                                        class="midia-content p-0 m-2" 
                                        v-bind:title="midia.name">
                                        <input type="hidden" name="midia" v-model="midia.id">
                                        <a v-bind:href="midia.path" data-lightbox="midias">
                                            <img class="position-absolute" v-bind:src="midia.path">
                                        </a>
                                        <button type="button" v-on:click="removeFromList( key )" class="btn btn-danger btn-sm position-absolute" title="Usar imagem">
                                        <i class="fa fa-trash-o"></i>
                                        </button>
                                    </div>
                                </div><!-- midias -->

                                <button v-if="attrs.size != picked.length" type="button" class="btn btn-success" v-on:click="open()">
                                    Selecionar
                                </button><!-- botao de adicionar foto -->

                                </div><!-- input de midia -->
                                <br>
                                <label>Logo encontrado no site</label>
                                <img class="mr-3" width="100" src="{{ $image_link }}" alt="Generic placeholder image">
                                <input type="hidden" name="default-logo" value="{{ $image_link }}" >
                                <br>
                                <label for="default-midia pt-3" for="default-midia">
                                    <input type="checkbox" id="default-midia" name="default-midia">
                                    Usar este
                                </label>
                            </div>

                            <div class="col-8">
                                <div class="row">
                                    <div class="col p-2">
                                        <label for="font-name">Nome</label>
                                        <input  type="text"  
                                                class="form-control"
                                                name="font-name"
                                                value="{{ $feed->getTitle() }}"
                                                placeholder="Titulo">
                                    </div>
                                </div><!-- nome do gateway -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                        <label for="region_id">Região</label>
                                        <select id='category_id' 
                                                class='selectpicker dropup form-control'
                                                name='region_id'
                                                data-live-search='true' class='form-control'>
                                                @foreach( $regions as $region )
                                                <option value='{{ $region->id}}'>{{ $region->name }}</option>
                                                @endforeach
                                        </select>
                                    </div>
                                </div><!-- select de regiao -->

                                <div class="row">
                                    <div class="col p-2">
                                        <label for="category_id">Categoria</label>
                                        <select id='category_id' 
                                                class='selectpicker dropup form-control'
                                                name='category_id'
                                                data-live-search='true' class='form-control'>
                                                @foreach( $categories as $cat )
                                                <option value='{{ $cat->id}}'>{{ $cat->name }}</option>
                                                @endforeach
                                        </select>
                                    </div>
                                </div><!-- select de categories -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                    <label for="site-url">Site</label>
                                    <input  type="text"  
                                            class="form-control"
                                            name="site-url"
                                            value="{{ $feed->getSiteUrl() }}"
                                            placeholder="URL do veículo">
                                    </div>
                                </div><!-- url do gateway -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                        <label for="rss-link">Link rss</label>
                                        <input type="text" readonly name="rss-link" class="form-control" value="{{ $feed->getFeedUrl() }}">
                                    </div>
                                </div><!-- link rss -->

                                <div class="row">
                                    <div class="col">
                                        <label for="default-gateway">
                                            <input type="checkbox" id="default-gateway" name="default-gateway">
                                            Marcar como padrão
                                        </label>
                                    </div>
                                </div><!-- checkbox padrao -->

                                <div class="row">
                                    <div class="col">
                                        <label for="visible-gateway">
                                            <input type="checkbox" id="visible-gateway" name="visible-gateway">
                                            Marcar como visível
                                        </label>
                                    </div>
                                </div><!-- checkbox visivel -->

                           </div><!-- text -->
                        </div>

                        <div class="row">
                            <div class="col text-right pt-3">
                                <button type="submit" class="btn btn-success">
                                    Salvar fonte no sistema
                                </button>
                            </div>
                        </div>
                        @endif
                    @else
                    <span>Informe um Link RSS/Atom</span>
                    @endif
                </div>
            </form>
        </div>

        @if( isset( $feed ) && $feed )
        @foreach( $feed->items as $item )
        <div style="width: 100%" class="media bg-light mt-2 z-depth-1 ml-2 rounded p-2 mr-4">
            @if( $item->cover )
                <img width="100" class="mr-3" src="{{ $item->cover }}" alt="{{ $item->getTitle() }}">
            @else
                <img width="100" class="mr-3" src="{{ base_url( 'public/images/empty.jpg' ) }}" alt="{{ $item->getTitle() }}}">            
            @endif

            <div class="media-body">
                <h5 class="mt-0">{{ $item->getTitle() }}</h5>

                @if( $item->getPublishedDate() )
                <div class="row pb-1">
                    <div class="col">
                        <small>
                            Data de publicação: {{ $item->getPublishedDate()->format( 'H:i:s d-m-Y' ) }}
                        </small>
                    </div>
                </div>
                @endif

                <div class="row">
                    <div class="col">
                        <a href="{{ $item->getUrl() }}" target="blank" class="btn btn-primary">
                            Ver noticia
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- ultimas noticias -->
        @endforeach
        @endif
    </div>
@endsection