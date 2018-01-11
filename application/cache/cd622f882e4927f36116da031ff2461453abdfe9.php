<?php $__env->startSection('content'); ?>
    <div class="row">

        <?php $__currentLoopData = $rss->news; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $new): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="col-sm-4 p-2">
            <div class="card z-depth-1">
                
                <?php if( $new['cover'] ): ?>
                <img class="card-img-top" src="<?php echo e($new['cover']); ?>" alt="<?php echo e($new['title']); ?>">
                <?php endif; ?>

                <div class="card-body">
                    <h5 class="card-title"><?php echo e($new['title']); ?></h5>

                    <?php if( $new['description'] ): ?>
                    <p class="card-text"><?php echo e($new['description']); ?></p>
                    <?php endif; ?>

                    <?php if( isset( $new['link'] ) && $new['link'] ): ?>
                    <a href="<?php echo e($new['link']); ?>" target="blank" class="btn btn-primary">Visualizar noticia</a>
                    <?php endif; ?>

                </div>
            </div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>