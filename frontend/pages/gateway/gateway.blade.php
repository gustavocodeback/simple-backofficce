@extends('layouts.admin')
@section('content')
    <div class="row">

        @foreach( $rss->items as $new )
        <div class="col-sm-6 p-2">
            <div class="card z-depth-1">
                
                @if( $new->cover )
                <img class="card-img-top" src="{{ $new->cover}}" alt="{{ $new->getTitle() }}">
                @endif

                <div class="card-body">
                    <h5 class="card-title">{{ $new->getTitle() }}</h5>
                    <p>
                        {!! $new->resume !!}
                    </p>
                    <a href="{{ $new->getUrl() }}" target="blank" class="btn btn-primary">Visualizar noticia</a>
                </div>
            </div>
        </div>
        @endforeach

    </div>
@endsection