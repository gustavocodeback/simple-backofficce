<?php $__env->startSection('content'); ?>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Simple</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#download">Download</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#features">Conheça</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Redes sociais</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">Simple é um aplicativo para procurar e organizar notícias do Brasil e do mundo no seu smartphone</h1>
              <a href="#download" class="btn btn-outline btn-xl js-scroll-trigger">Fazer download de graça!</a>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="<?php echo e(base_url( 'public/images/login.png' )); ?>" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="download bg-primary text-center" id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h2 class="section-heading">Começe a usar o Simple agora mesmo!</h2>
            <p>Simple está disponível nas principais plataformas, começe a utiliza-lo agora mesmo!</p>
            <div class="badges">
              <a class="badge-link" href="#"><img src="<?php echo e(base_url( 'public/images/google-play-badge.svg' )); ?>"></a>
              <a class="badge-link" href="#"><img src="<?php echo e(base_url( 'public/images/app-store-badge.svg' )); ?>"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Notícias do Brasil e do mundo, direto no seu bolso</h2>
          <p class="text-muted">Veja o que pode ser feito com o Simple!</p>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="<?php echo e(base_url( 'public/images/veiculo-page.png' )); ?>" class="img-fluid">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-screen-smartphone text-primary"></i>
                    <h3>Acessível</h3>
                    <p class="text-muted">
                        Notícias atualizadas constantemente na ponta do seu dedo
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-camera text-primary"></i>
                    <h3>Fácil de usar</h3>
                    <p class="text-muted">
                        Interface intuitiva. Basta baixar e abrir para visualizar as primeiras notícias
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-present text-primary"></i>
                    <h3>Gratuito</h3>
                    <p class="text-muted">
                        Sem taxas ou cobranças indesejadas
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-lock-open text-primary"></i>
                    <h3>Seguro</h3>
                    <p class="text-muted">
                        Seus dados sempre protegidos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta-content">
        <div class="container">
          <h2>Seja Simple <br>agora.</h2>
          <a href="#contact" class="btn btn-outline btn-xl js-scroll-trigger">
            Download gratuito!
          </a>
        </div>
      </div>
      <div class="overlay"></div>
    </section>

    <section class="contact bg-primary" id="contact">
      <div class="container">
        <h2>Acompanhe-nos nas redes sociais</h2>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li class="list-inline-item social-google-plus">
            <a href="#">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy; <?php echo e(date( 'Y', time() )); ?> Simple. Todos os direitos reservados.</p>
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="<?php echo e(site_url( 'auth' )); ?>">Área administrativa</a>
          </li>
        </ul>
      </div>
    </footer>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.landing-page', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>