/**
 * Faz o Bootstrap do JS da aplicação
 * 
 */
try {
    
    // Carrega o jQuery
    window.$ = window.jQuery = require( 'jquery' );

    // Carrega o Popper
    window.Popper = require( 'popper.js' );

} catch (error) {}

// Inclui o Bootstrap
require( 'bootstrap' );
require( 'bootstrap-select' );
require( '../../node_modules/summernote/dist/summernote-bs4' );
require( '../../node_modules/summernote/lang/summernote-pt-BR' );

// JS
require( '../components/edit-mode/edit-mode' );
require( '../components/model-form/model-form' );
require( '../pages/log/log' );
require( '../pages/settings/settings' );

// End of file
