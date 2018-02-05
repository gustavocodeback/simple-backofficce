<?php $__env->startSection('content'); ?>
    <div id="quick_insert">
        <div class="col bg-light z-depth-1 rounded pb-3">
                
            <div class="page-header">
                <h2>Inserção rápida</h2>
            </div>

            <form method="POST" action="<?php echo e(site_url( 'quick_insert/parse' )); ?>" class="row">
                <div class="col p-3">
                    <div class="input-group">
                        <input  type="text" 
                                class="form-control" 
                                placeholder="Informe um link RSS"
                                value="<?php echo e(isset( $query ) ? $query : ''); ?>"
                                name="query">
                        <span class="input-group-btn">
                            <button class="btn btn-primary">Pesquisar!</button>
                        </span>
                    </div>
                </div>
            </form><!-- formulário de pesquisa -->

            <?php if( isset( $addedGateway ) && $addedGateway ): ?>
            <div class="row">
                <div class="col">
                    <div class="alert alert-success">
                        <b><?php echo e($addedGateway->name); ?></b> foi adicionado com sucesso como uma fonte do Simple.
                        <br>
                        Para editar essa fonte, 
                        <a href="<?php echo e(site_url( 'gateway/list/'.$addedGateway->category_id.'?addModal=true&id='.$addedGateway->id )); ?>">clique aqui</a>
                    </div>
                </div>
            </div>
            <?php endif; ?>

            <form action="<?php echo e(site_url( 'quick_insert/save_gateway' )); ?>" method="POST" class="row">
                <div class="col p-5">
                    <?php if( isset( $feed ) ): ?>
                        <?php if( $feed ): ?>
                        <h3>Portal</h3>
                        
                        <div class="row">
                            <div class="col-4">
                                <div  class="midiaInput" data-size="1" data-ratio="1:1">

                                <label class="d-block pt-2">Logo</label>

                                <div v-if="picked.length > 0" class="row pr-2 pl-2">
                                <div  v-for="(midia, key) in picked" 
                                        class="midia-content p-0 m-2" 
                                        v-bind:title="midia.name">
                                        <input type="hidden" name="midia" v-model="midia.id">
                                        <a v-bind:href="midia.path" data-lightbox="midias">
                                            <img class="position-absolute" v-bind:src="midia.path">
                                        </a>
                                        <button type="button" v-on:click="removeFromList( key )" class="btn btn-danger btn-sm position-absolute" title="Usar imagem">
                                        <i class="fa fa-trash-o"></i>
                                        </button>
                                    </div>
                                </div><!-- midias -->

                                <button v-if="attrs.size != picked.length" type="button" class="btn btn-success" v-on:click="open()">
                                    Selecionar
                                </button><!-- botao de adicionar foto -->

                                </div><!-- input de midia -->
                                <br>
                                <label>Logo encontrado no site</label>
                                <img class="mr-3" width="100" src="<?php echo e($image_link); ?>" alt="Generic placeholder image">
                                <input type="hidden" name="default-logo" value="<?php echo e($image_link); ?>" >
                                <br>
                                <label for="default-midia pt-3" for="default-midia">
                                    <input type="checkbox" id="default-midia" name="default-midia">
                                    Usar este
                                </label>
                            </div>

                            <div class="col-8">
                                <div class="row">
                                    <div class="col p-2">
                                        <input  type="text"  
                                                class="form-control"
                                                name="font-name"
                                                value="<?php echo e($feed->getTitle()); ?>"
                                                placeholder="Titulo">
                                    </div>
                                </div><!-- nome do gateway -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                        <select id='category_id' 
                                                class='selectpicker dropup form-control'
                                                name='region_id'
                                                data-live-search='true' class='form-control'>
                                                <?php $__currentLoopData = $regions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $region): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value='<?php echo e($region->id); ?>'><?php echo e($region->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    </div>
                                </div><!-- select de categories -->

                                <div class="row">
                                    <div class="col p-2">
                                        <select id='category_id' 
                                                class='selectpicker dropup form-control'
                                                name='category_id'
                                                data-live-search='true' class='form-control'>
                                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <option value='<?php echo e($cat->id); ?>'><?php echo e($cat->name); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    </div>
                                </div><!-- select de categories -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                    <input  type="text"  
                                            class="form-control"
                                            name="site-url"
                                            value="<?php echo e($feed->getSiteUrl()); ?>"
                                            placeholder="URL do veículo">
                                    </div>
                                </div><!-- nome do gateway -->
                                
                                <div class="row">
                                    <div class="col p-2">
                                        <input type="text" readonly name="rss-link" class="form-control" value="<?php echo e($feed->getFeedUrl()); ?>">
                                    </div>
                                </div><!-- link rss -->

                                <div class="row">
                                    <div class="col">
                                        <label for="default-gateway">
                                            <input type="checkbox" id="default-gateway" name="default-gateway">
                                            Marcar como padrão
                                        </label>
                                    </div>
                                </div><!-- checkbox padrao -->

                           </div><!-- text -->
                        </div>

                        <div class="row">
                            <div class="col text-right pt-3">
                                <button type="submit" class="btn btn-success">
                                    Salvar fonte no sistema
                                </button>
                            </div>
                        </div>
                        <?php endif; ?>
                    <?php else: ?>
                    <span>Informe um Link RSS/Atom</span>
                    <?php endif; ?>
                </div>
            </form>
        </div>

        <?php if( isset( $feed ) && $feed ): ?>
        <?php $__currentLoopData = $feed->items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div style="width: 100%" class="media bg-light mt-2 z-depth-1 ml-2 rounded p-2 mr-4">
            <?php if( $item->cover ): ?>
                <img width="100" class="mr-3" src="<?php echo e($item->cover); ?>" alt="<?php echo e($item->getTitle()); ?>">
            <?php else: ?>
                <img width="100" class="mr-3" src="<?php echo e(base_url( 'public/images/empty.jpg' )); ?>" alt="<?php echo e($item->getTitle()); ?>}">            
            <?php endif; ?>

            <div class="media-body">
                <h5 class="mt-0"><?php echo e($item->getTitle()); ?></h5>

                <?php if( $item->getPublishedDate() ): ?>
                <div class="row pb-1">
                    <div class="col">
                        <small>
                            Data de publicação: <?php echo e($item->getPublishedDate()->format( 'H:i:s d-m-Y' )); ?>

                        </small>
                    </div>
                </div>
                <?php endif; ?>

                <div class="row">
                    <div class="col">
                        <a href="<?php echo e($item->getUrl()); ?>" target="blank" class="btn btn-primary">
                            Ver noticia
                        </a>
                    </div>
                </div>
            </div>
        </div><!-- ultimas noticias -->
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>
    </div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>