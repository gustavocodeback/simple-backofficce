<?php
/**
 * remove_comments
 *
 * remove os comentários de uma string
 *
 * @return void
 */
if ( !function_exists( 'remove_comments' ) ) {
    function remove_comments() {
        
        //  Removes multi-line comments and does not create
        //  a blank line, also treats white spaces/tabs
        $text = preg_replace('!^[ \t]*/\*.*?\*/[ \t]*[\r\n]!s', '', $text);

        //  Removes single line '//' comments, treats blank characters
        $text = preg_replace('![ \t]*//.*[ \t]*[\r\n]!', '', $text);

        //  Strip blank lines
        $text = preg_replace("/(^[\r\n]*|[\r\n]+)[\s\t]*[\r\n]+/", "\n", $text);
    }
}
        
/**
 * file_force_contents
 *
 * força a criação de um arquivocd
 *
 * @param [type] $dir
 * @param [type] $contents
 * @return void
 */
if ( !function_exists( 'file_force_contents' ) ) {
    function file_force_contents($dir, $contents) {
        
        // separa as partes do caminho
        $parts = explode('/', $dir);
        $file = array_pop($parts);
        $dir = '';
        
        // percorre as mesmas
        foreach ($parts as $part) {
            $dir = trim( $dir, '/' );
            if (!is_dir( $dir .= "/$part" )) {
                mkdir( $dir );
            }
        }
            
        // cria o arquivo
        file_put_contents("$dir/$file", $contents);
    }
}

/* end of file */