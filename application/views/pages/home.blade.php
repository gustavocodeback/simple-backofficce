@extends('layouts.master')
@section('content')
    <div id="home">
        <div class="page-header">
            @if( !auth() )
                <h1>Faça login</h1>
            @else
                <h1><small>Bem vindo, </small>{{ auth()->name }}</h1>
                @if( can( 'update', 'user' ) )
                    Pode acessar
                @endif
            @endif
        </div>
    </div>
@endsection