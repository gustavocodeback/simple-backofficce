<?php $__env->startSection('content'); ?>
    <div class="page-header">
        <h1><?php echo e($title); ?></h1>
    </div>
    <div class="row">
        <div class="col pt-5">
        <b>Último id sincronizado:</b> <?php echo e($lastId); ?> <br>
        <b>Sincronizações por perído:</b> <?php echo e($period); ?> <br>
        <b>Último cron:</b> <?php echo e($started); ?> <br>
        </div>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>