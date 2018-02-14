@extends('layouts.admin')
@section('content')
    <div class="row">

        @foreach( $categories as $category )
        <div class="col-sm-4 p-2">
            <div {!! clickOpen( 'gateway/list/'.$category->id ) !!} class="clicable card bg-dark text-white p-0 z-depth-3">
                <img class="card-img" src="{{ ( $category->belongsTo( 'midia' ) ) ? 
                                              $category->belongsTo( 'midia' )->path() :
                                              base_url( 'public/images/empty.jpg' ) }}" alt="Card image">
                <div class="card-img-overlay p-0">
                    <h5 class="card-title bg-success position-absolute p-2 z-depth-3"
                        style="bottom: 1px">{{ $category->name }}</h5>
                </div>
            </div>
        </div>
        @endforeach
        <div class="col-sm-4 p-2">
            <div {!! clickOpen( 'gateway/list/1' ) !!} class="clicable card bg-dark text-white p-0 z-depth-3">
                <img class="card-img" src="{{ base_url( 'public/images/categoria_geral.png' ) }}" alt="Card image">
                <div class="card-img-overlay p-0">
                    <h5 class="card-title bg-success position-absolute p-2 z-depth-3"
                        style="bottom: 1px">Categoria geral</h5>
                </div>
            </div>
        </div>

    </div>
@endsection