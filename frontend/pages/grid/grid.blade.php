@extends('layouts.admin')
@section('content')

@yield( 'beforeGrid' )

@if( method_exists( $modelGrid, 'form' ) )
@include( 'components.model-form.model-form' )
@endif

<div class="col pb-3 text-right">
    @if( isset( $modelGrid->enableImport ) && $modelGrid->enableImport )
    <button class="btn btn-info">Importar CSV</button>
    @endif

    @if( isset( $modelGrid->enableExport ) && $modelGrid->enableExport )
    <button class="btn btn-info">Exportar CSV</button>
    @endif

    @if( method_exists( $modelGrid, 'form' ) )
    <a href="{{ site_url( uri_string().'?addModal=true' ) }}" class="btn btn-success text-light">
        Adicionar
    </a>
    @endif
</div>

<table id="example" class="table table-striped table-bordered">
    <thead>
        <tr>
            @foreach( $modelGrid->visibles as $field )
            <th>{{ $field }}</th>
            @endforeach
        </tr>
    </thead>
    <tfoot>
        <tr>
            @foreach( $modelGrid->visibles as $field )
            <th>{{ $field }}</th>
            @endforeach
        </tr>
    </tfoot>
</table>
@endsection

@section( 'scripts' )
<script>
$(document).ready(function() {
    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "{{ site_url( $url ) }}",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
        }
    });
});
</script>
@yield( 'scripts-grid' )
@endsection

@yield( 'afterGrid' )