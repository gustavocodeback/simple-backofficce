const gulp        = require('gulp');
const sass        = require('gulp-sass');
const minify      = require('gulp-minify');
const runSequence = require('run-sequence');
const rename      = require('gulp-rename');
const concat      = require('gulp-concat');
const cleanCSS    = require('gulp-clean-css');
const connect     = require('gulp-connect-php');
const config      = require('./singular.json');

// cria o servidor
const server = new connect();

// o nome dos arquivos gerados
const dist = {
    css: 'singular.min.css',
    js:  'singular.min.js'
};

// arquivos css
const cssFiles = [];

// arquivos js
const jsFiles = config.jsFiles;

// arquivos vigiados no watch
const watchFiles = [
  './assets/components/**/*.scss',
  './assets/pages/**/*.scss',
  './assets/globals/**/*.scss',
  './assets/layouts/**/*.scss',
  './assets/components/*/**.js',
  './assets/pages/*/**.js',
  './assets/globals/**/*.js',
  './assets/layouts/**/*.js',
];

/**
 * connect
 * 
 * conecta o servidor
 * 
 */
gulp.task('connect', function() {
  server.server();
});

/**
 * disconnect
 * 
 * disconecta o servidor
 * 
 */
gulp.task('disconnect', function() {
  server.closeServer();
});

/**
 * minify
 * 
 * minifica o arquivo css
 * 
 */
gulp.task('minify', function () {
  return gulp.src('./public/dist/main.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./public/dist/'));
});

/**
 * sass
 * 
 * compila os arquivos sass
 * 
 */
gulp.task('sass', function () {
  return gulp.src('./assets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/dist'));
});

/**
 * scripts
 * 
 * concatena os scripts em um arquivo
 * 
 */
gulp.task('scripts', function () {
  return gulp.src( jsFiles )
    .pipe(concat({
      path: dist.js,
      stat: {
        mode: 0666
      }
    }))
    .pipe(gulp.dest('./public/dist/'));
});

/**
 * rename
 * 
 * renomeia o arquivo css
 * 
 */
gulp.task('rename', function() {
  return gulp.src( './public/dist/main.css' )
         .pipe( rename( './public/dist/'+dist.css ) )
         .pipe( gulp.dest( "./" ) );
});

/**
 * compress
 * 
 * comprime os arquivos js
 * 
 */
gulp.task('compress', function () {
  gulp.src('public/dist/'+dist.js)
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '.js'
      },
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('./public/dist'));
});

/**
 * compile
 * 
 * compila os arquivos css
 * 
 */
gulp.task('compile', function () {

  // executa as tarefas em sequencia
  runSequence('sass', 'minify', 'scripts', 'compress', 'rename');
});

/**
 * serve
 * 
 * inicia o servidor
 * 
 */
gulp.task('serve', function() {
  runSequence( 'disconnect', 'compile', 'connect' );
});

/**
 * compile:watch
 * 
 * vigia os arquivos de compilação
 * 
 */
gulp.task('compile:watch', function () {
  gulp.watch([  './assets/**/*.*',
                './assets/**/**/*.*'
  ], ['compile']);
});

/**
 * compile:watch
 * 
 * vigia os arquivos de compilação
 * 
 */
gulp.task('serve:watch', function () {
  server.server();
  gulp.watch([  './assets/**/*.*',
                './assets/**/**/*.*'
  ], ['serve']);
});

/* end of file */