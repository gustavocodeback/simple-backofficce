<?php $__env->startSection('content'); ?>
    <div class="row">

        <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-sm-4 p-2">
            <div <?php echo clickOpen( 'gateway/list/'.$category->id ); ?> class="clicable card bg-dark text-white p-0 z-depth-3">
                <img class="card-img" src="<?php echo e($category->belongsTo( 'midia' )->path()); ?>" alt="Card image">
                <div class="card-img-overlay p-0">
                    <h5 class="card-title bg-success     position-absolute p-2 z-depth-3"
                        style="bottom: 1px"><?php echo e($category->name); ?></h5>
                </div>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>