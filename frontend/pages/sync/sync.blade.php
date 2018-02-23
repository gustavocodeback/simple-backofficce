@extends('layouts.admin')
@section('content')
    <div class="page-header">
        <h1>{{ $title }}</h1>
    </div>
    <div class="row">
        <div class="col pt-5">
        <b>Último id sincronizado:</b> {{ $lastId }} <br>
        <b>Sincronizações por perído:</b> {{ $period }} <br>
        <b>Último cron:</b> {{ $started }} <br>
        </div>
    </div>
@endsection