<?php $__env->startSection( 'content' ); ?>
    <div class="page-header">
        <h1>Simple News Admin</h1>
    </div>

    <div class="row pt-3">
        <div class="col-md-4">
            <div class="card text-white bg-success">
                <div class="card-header">Notícias cadastradas</div>
                <div class="card-body">
                    <div class="pb-3 text-center">
                        <i class="fa fa-4x fa-newspaper-o"></i>
                    </div>
                    <h4 class="card-title text-center">
                        <?php echo e($numOfNotices); ?>

                    </h4>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-white bg-danger">
                <div class="card-header">Veiculos cadastrados</div>
                <div class="card-body">
                    <div class="pb-3 text-center">
                        <i class="fa fa-4x fa-trophy"></i>
                    </div>
                    <h4 class="card-title text-center">
                        <?php echo e($numOfGateways); ?>

                    </h4>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-white bg-warning">
                <div class="card-header">Últma atualização</div>
                <div class="card-body">
                    <div class="pb-3 text-center">
                        <i class="fa fa-4x fa-clock-o"></i>
                    </div>
                    <h6 class="card-title text-center pb-1">
                        <?php echo e(date( 'H:i d-m-Y', $lastUpdate )); ?>

                    </h6>
                </div>
            </div>
        </div>
    </div><!-- dados do sistema -->


    <div class="page-header">
        <h4>Últimas adicionadas</h4>
    </div>
    <div class="row">
        <?php $__currentLoopData = $notices; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $notice): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div style="width: 100%" class="media bg-light mt-2 z-depth-1 ml-2 rounded p-2 mr-4">
            <?php if( $notice->image_link ): ?>
                <img width="100" class="mr-3" src="<?php echo e($notice->image_link); ?>" alt="<?php echo e($notice->title); ?>">
            <?php else: ?>
                <img width="100" class="mr-3" src="<?php echo e(base_url( 'public/images/empty.jpg' )); ?>" alt="<?php echo e($notice->title); ?>">            
            <?php endif; ?>

            <div class="media-body">
                <h5 class="mt-0"><?php echo e($notice->title); ?></h5>
                <?php if( $notice->description ): ?>
                    <?php echo e($notice->description); ?>

                <?php endif; ?>

                <div class="row pb-1">
                    <div class="col">
                        <small>
                            Veículo: <?php echo e($notice->belongsTo( 'gateway' )->name); ?>

                        </small>
                    </div>
                </div>

                <?php if( $notice->date ): ?>
                <div class="row pb-1">
                    <div class="col">
                        <small>
                            Data de publicação: <?php echo e(date( 'H:i:s d-m-Y', strtotime( $notice->date ) )); ?>

                        </small>
                    </div>
                </div>
                <?php endif; ?>

                <div class="row">
                    <div class="col">
                        <a href="<?php echo e($notice->notice_link); ?>" target="blank" class="btn btn-primary">
                            Ver noticia
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- ultimas noticias -->

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make( 'layouts.admin' , array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>