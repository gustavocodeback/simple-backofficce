<!-- Modal -->
<div class="modal fade {{ getAttr( 'addModal' ) ? 'show' : '' }}" id="addModal" tabindex="-1">
  <div class="modal-dialog" role="document">
      {!! form_open( $modelGrid->form( 'url' ), [ 'class' => 'modal-content'] ) !!}
    
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Novo registro</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    
      <div class="modal-body">
        @foreach( $modelGrid->form( 'fields' ) as $item )
          @if( $item['type'] == 'text' )
          {!! inputText( $item['label'],  $item['name'], [ 'attr' => [ 'value' => $modelGrid->{$item['name']} ] ] ) !!}
          @endif
          @if( $item['type'] == 'number' )
          {!! inputNumber( $item['label'],  $item['name'], [ 'attr' => [ 'value' => $modelGrid->{$item['name']} ] ] ) !!}
          @endif
        @endforeach
      </div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        <button type="submit" class="btn btn-primary">Salvar</button>
      </div>
    
    </div>
  {!! form_close() !!}  
</div>