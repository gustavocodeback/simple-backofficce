@extends('layouts.master')
@section('content')
    <div class="title-divider">
        <h3>Categorias</h3>
    </div><!-- primeiro titulo -->

    <div class="row mt-4">
        <div class="col">
            <a href="{{ site_url( 'category/create' ) }}" class="btn btn-success">
                Criar nova categoria
            </a>
        </div>
    </div>

    @include( 'components.success-alert' )

    <div class="row mt-3">
    @foreach( $list as $list_item )
        <div class="col-6">
            <div class="card p-0">

                @if( $list_item['image'] )
                <img class="card-img-top" src="{{ $list_item['image'] }}" alt="Card image cap">
                @endif

                <div class="card-body">
                    <h4 class="card-title">{{ $list_item['title']}}</h4>
                    <p class="card-text">{{ $list_item['description'] }}</p>
                    <a href="{{ $list_item['edit_url'] }}" class="btn btn-sm btn-outline-info">Editar</a>
                    <a href="{{ $list_item['remove_url'] }}" class="btn btn-sm btn-outline-danger">Remover</a>
                </div>
            </div>
        </div>
    @endforeach
    </div><!-- cards -->
@endsection