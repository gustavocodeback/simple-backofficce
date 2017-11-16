<?php $__env->startSection('content'); ?>
    <div class="title-divider">
        <h3>Categorias</h3>
    </div><!-- primeiro titulo -->

    <div class="row mt-4">
        <div class="col">
            <a href="<?php echo e(site_url( 'category/create' )); ?>" class="btn btn-success">
                Criar nova categoria
            </a>
        </div>
    </div>

    <?php echo $__env->make( 'components.success-alert' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

    <div class="row mt-3">
    <?php $__currentLoopData = $list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $list_item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-6">
            <div class="card p-0">

                <?php if( $list_item['image'] ): ?>
                <img class="card-img-top" src="<?php echo e($list_item['image']); ?>" alt="Card image cap">
                <?php endif; ?>

                <div class="card-body">
                    <h4 class="card-title"><?php echo e($list_item['title']); ?></h4>
                    <p class="card-text"><?php echo e($list_item['description']); ?></p>
                    <a href="<?php echo e($list_item['edit_url']); ?>" class="btn btn-sm btn-outline-info">Editar</a>
                    <a href="<?php echo e($list_item['remove_url']); ?>" class="btn btn-sm btn-outline-danger">Remover</a>
                </div>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div><!-- cards -->
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.master', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>