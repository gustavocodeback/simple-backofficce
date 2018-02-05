<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

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