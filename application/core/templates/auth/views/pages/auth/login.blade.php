@extends('layouts.login')
@section('content')
    {!! form_open( 'auth', [ 'class' => 'pb-5 col-md-4 offset-md-4'] ) !!}

        {!! inputEmail( 'E-mail','email', [ 'icon' => 'at', 'attr' => [ 'value' => $user->email, 'required' => 'required' ]  ] ) !!}
        {!! inputPassword( 'Senha', 'password', [ 'icon' => 'lock', 'attr' => [ 'required' => 'required' ] ] ) !!}

        <div class="row mt-3">
            <div class="col">
                <a class="text-light" href="{{ site_url( 'auth/forgot_password' ) }}">
                    Esqueci minha senha
                </a>
            </div>
            <div class="col text-right">
                <a class="text-light" href="{{ site_url( 'auth/signup' ) }}">
                    Criar uma conta
                </a>
            </div>
        </div><!-- links de ação -->
        
        @include( 'components.error-alert' )

        <div class="row mt-3">
            <div class="col">
                <button class="btn btn-block btn-success">Entrar</button>
            </div>
        </div><!-- botao de login -->

    {!! form_close() !!}
@endsection