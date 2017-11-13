@if( isset( $errors ) && $errors )
<br>
<div id="error-alert">
    <div class="alert alert-danger" role="alert">
        {!! $errors !!}
    </div>
</div>
@endif
