@extends('layouts.master')
@section('content')
    {!! form_open_multipart( 'category/save/'.$item->id, [ 'class' => 'card'] ) !!}

        <div class="card-title">
            Categoria
        </div><!-- nome da secao -->

        <div class="card-subtitle">
            Formulário de criação/edição de categoria
        </div><!-- subtitulo da sessao -->

        @include( 'components.error-alert')

        <div class="divider">
            <span>Textos</span>
        </div>

        <div class="row">
            <div class="col">
                {!! inputText( 'Nome', 'name', [ 'icon' => 'user', 'attr' => [ 'value' => $item->name ] ] ) !!}
            </div>
            <div class="col">
                {!! inputText( 'Slug', 'slug', [ 'icon' => 'user', 'attr' => [ 'value' => $item->slug ] ] ) !!}            
            </div>
        </div>

        <div class="divider">
            <span>Descrição</span>
        </div>

        <div class="row">
            <div class="col">
                <div class="input-group">
                    <textarea rows="5" class="form-control" name="description">{{ $item->description }}</textarea>
                </div>
            </div>
        </div><!-- inputs com icones -->
        
        <div class="divider">
            <span>Midia</span>
        </div>

        <div class="row">
            <div class="col">
                @if( isset( $image ) && $image )
                <div id="avatar" data-src="{{$image}}" data-name="cover" data-ratio="1:1.5"></div>
                @else
                <div id="avatar" data-name="cover" data-ratio="1:1.5"></div>                
                @endif
            </div>
            <div class="col"></div>
        </div>

        <div class="divider">
            <span>Mostrar no app</span>
        </div>

        <div class="row">
            <div class="col">
                <div class="toggle-switch">
                    <input name="status" value="A" type="checkbox" id="check1" {{ $item->status == 'A' ? 'checked="checked"' : '' }}>
                    <label for="check1"></label>                            
                </div>
            </div>
        </div><!-- toggles checkbox -->

        <div class="divider">
            <span>Ações</span>
        </div>

        <div class="row">
            <div class="col text-right">
                <a href="{{ site_url( 'category/list' ) }}" class="btn btn-default">Cancelar</a>
                <button class="btn btn-success">Salvar</button>
            </div>
        </div>

    {!! form_close() !!}
@endsection