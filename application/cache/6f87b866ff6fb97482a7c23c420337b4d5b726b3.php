<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Get Simple</title>

    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo e(base_url( 'public/icons/apple-icon-57x57.png' )); ?>">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo e(base_url( 'public/icons/apple-icon-60x60.png' )); ?>">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo e(base_url( 'public/icons/apple-icon-72x72.png' )); ?>">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo e(base_url( 'public/icons/apple-icon-76x76.png' )); ?>">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo e(base_url( 'public/icons/apple-icon-114x114.png' )); ?>">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo e(base_url( 'public/icons/apple-icon-120x120.png' )); ?>">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo e(base_url( 'public/icons/apple-icon-144x144.png' )); ?>">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo e(base_url( 'public/icons/apple-icon-152x152.png' )); ?>">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo e(base_url( 'public/icons/apple-icon-180x180.png' )); ?>">
    <link rel="icon" type="image/png" sizes="192x192"  href="<?php echo e(base_url( 'public/icons/android-icon-192x192.png' )); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo e(base_url( 'public/icons/favicon-32x32.png' )); ?>">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo e(base_url( 'public/icons/favicon-96x96.png' )); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo e(base_url( 'public/icons/favicon-16x16.png' )); ?>">
    <link rel="manifest" href="/manifest.json">
    <meta name="theme-color" content="#94007D">
    <link rel="icon" type="image/x-icon" href="<?php echo e(base_url( 'public/icons/favicon.ico' )); ?>">

     <!-- Bootstrap core CSS -->
    <link href="<?php echo e(base_url( 'public/dist/vendor/bootstrap/css/bootstrap.min.css' )); ?>" rel="stylesheet">
    <link rel="stylesheet" href="<?php echo e(base_url( 'public/dist/vendor/font-awesome/css/font-awesome.min.css' )); ?>">
    <link rel="stylesheet" href="<?php echo e(base_url( 'public/dist/vendor/simple-line-icons/css/simple-line-icons.css' )); ?>">
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
    
    <!-- Plugin CSS -->
    <link rel="stylesheet" href="<?php echo e(base_url( 'public/dist/device-mockups/device-mockups.min.css' )); ?>">

    <!-- Custom styles for this template -->
    <link href="<?php echo e(base_url( 'public/dist/css/new-age.min.css' )); ?>" rel="stylesheet">

    <?php echo $__env->yieldContent( 'styles' ); ?>
</head>
<body id="page-top">
    <?php echo $__env->yieldContent( 'content' ); ?>

     <!-- Bootstrap core JavaScript -->
    <script src="<?php echo e(base_url( 'public/dist/vendor/jquery/jquery.min.js' )); ?>"></script>
    <script src="<?php echo e(base_url( 'public/dist/vendor/popper/popper.min.js' )); ?>"></script>
    <script src="<?php echo e(base_url( 'public/dist/vendor/bootstrap/js/bootstrap.min.js' )); ?>"></script>

    <!-- Plugin JavaScript -->
    <script src="<?php echo e(base_url( 'public/dist/vendor/jquery-easing/jquery.easing.min.js' )); ?>"></script>

    <!-- Custom scripts for this template -->
    <script src="<?php echo e(base_url( 'public/dist/js/new-age.min.js' )); ?>"></script>
    <?php echo $__env->yieldContent( 'scripts' ); ?>
</body>
</html>