<?php $__env->startSection('content'); ?>

<?php echo $__env->yieldContent( 'beforeGrid' ); ?>

<?php if( method_exists( $modelGrid, 'form' ) ): ?>
<?php echo $__env->make( 'components.model-form.model-form' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
<?php endif; ?>

<div class="col pb-3 text-right">
    <?php if( isset( $modelGrid->enableImport ) && $modelGrid->enableImport ): ?>
    <button class="btn btn-info">Importar CSV</button>
    <?php endif; ?>

    <?php if( isset( $modelGrid->enableExport ) && $modelGrid->enableExport ): ?>
    <button class="btn btn-info">Exportar CSV</button>
    <?php endif; ?>

    <?php if( method_exists( $modelGrid, 'form' ) ): ?>
    <a href="<?php echo e(site_url( uri_string().'?addModal=true' )); ?>" class="btn btn-success text-light">
        Adicionar
    </a>
    <?php endif; ?>
</div>

<table id="example" class="table table-striped table-bordered">
    <thead>
        <tr>
            <?php $__currentLoopData = $modelGrid->visibles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $field): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <th><?php echo e($field); ?></th>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <?php $__currentLoopData = $modelGrid->visibles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $field): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <th><?php echo e($field); ?></th>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tr>
    </tfoot>
</table>
<?php $__env->stopSection(); ?>

<?php $__env->startSection( 'scripts' ); ?>
<script>
$(document).ready(function() {
    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "<?php echo e(site_url( $url )); ?>",
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json"
        }
    });
});
</script>
<?php echo $__env->yieldContent( 'scripts-grid' ); ?>
<?php $__env->stopSection(); ?>

<?php echo $__env->yieldContent( 'afterGrid' ); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>