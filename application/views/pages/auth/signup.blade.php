@extends('layouts.login')
@section('content')
    {!! form_open( 'auth/signup', [ 'class' => 'pb-5 col-md-4 offset-md-4'] ) !!}

        {!! inputText( 'Nome', 'name', [ 'icon' => 'user', 'attr' => [ 'value' => $user->name ] ] ) !!}
        {!! inputEmail( 'E-mail','email', [ 'icon' => 'at', 'attr' => [ 'value' => $user->email ]  ] ) !!}
        {!! inputPassword( 'Senha', 'password', [ 'icon' => 'lock' ] ) !!}
        {!! inputPassword( 'Digite a senha novamente', 'confirm', [ 'icon' => 'lock' ] ) !!}

        <div class="row mt-3">
            <div class="col text-right">
                <a class="text-light" href="{{ site_url( 'auth' ) }}">Voltar ao login</a>
            </div>
        </div><!-- links de ação -->

        <div class="row mt-3" style="padding-bottom: 100px">
            <div class="col">
                <button class="btn btn-block btn-success">Criar conta</button>
            </div>
        </div><!-- botao de login -->
    {!! form_close() !!}
@endsection