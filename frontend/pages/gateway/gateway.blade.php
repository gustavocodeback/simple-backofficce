@extends('layouts.admin')
@section('content')
    <div class="row">

        @foreach( $rss->news as $new )
        <div class="col-sm-4 p-2">
            <div class="card z-depth-1">
                
                @if( $new['cover'] )
                <img class="card-img-top" src="{{ $new['cover']}}" alt="{{ $new['title'] }}">
                @endif

                <div class="card-body">
                    <h5 class="card-title">{{ $new['title'] }}</h5>

                    @if( $new['description'] )
                    <p class="card-text">{{ $new['description'] }}</p>
                    @endif

                    @if( isset( $new['link'] ) && $new['link'] )
                    <a href="{{ $new['link'] }}" target="blank" class="btn btn-primary">Visualizar noticia</a>
                    @endif

                </div>
            </div>
        </div>
        @endforeach

    </div>
@endsection