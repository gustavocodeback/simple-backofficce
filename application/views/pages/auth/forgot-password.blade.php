@extends('layouts.login')
@section('content')
    {!! form_open( 'auth/forgot_password', [ 'class' => 'pb-5 col-md-4 offset-md-4'] ) !!}

        {!! inputEmail( 'E-mail','email', [ 'icon' => 'at', 'attr' => [ 'value' => $user->email, 'required' => 'required' ]  ] ) !!}

        <div class="row mt-3">
            <div class="col text-right">
                <a class="text-light" href="{{ site_url( 'auth' ) }}">Voltar ao login</a>
            </div>
        </div><!-- links de ação -->

        @include( 'components.error-alert' )
        @include( 'components.success-alert' )

        <div class="row mt-3">
            <div class="col">
                <button class="btn btn-block btn-success">Entrar</button>
            </div>
        </div><!-- botao de login -->
    {!! form_close() !!}
@endsection