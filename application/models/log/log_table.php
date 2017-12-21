<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*                                                               
 |-------------------------------------------------------------- 
 | TABELA log                                           
 |-------------------------------------------------------------- 
 |                                                               
*/
$config['schema'] = array (
  'id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'primary_key' => true,
    'auto_increment' => true,
    'null' => false,
  ),
  'text' => 
  array (
    'type' => 'text',
    'null' => false,
  ),
  'action' => 
  array (
    'type' => 'varchar',
    'constraint' => 60,
    'null' => false,
  ),
  'created_at' => 
  array (
    'type' => 'datetime',
    'null' => false,
  ),
  'updated_at' => 
  array (
    'type' => 'datetime',
    'null' => true,
  ),
  'color' => 
  array (
    'type' => 'varchar',
    'constraint' => 20,
    'null' => false,
  ),
  'json' => 
  array (
    'type' => 'text',
    'null' => true,
  ),
  'user_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => true,
  ),
);

/* end of file */