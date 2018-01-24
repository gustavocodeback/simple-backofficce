<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*                                                               
 |-------------------------------------------------------------- 
 | TABELA notice                                           
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
  'gateway_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'title' => 
  array (
    'type' => 'varchar',
    'constraint' => 120,
    'null' => false,
  ),
  'notice_link' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => false,
  ),
  'image_link' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => true,
  ),
  'description' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => true,
  ),
  'text' => 
  array (
    'type' => 'text',
    'null' => true,
  ),
  'date' => 
  array (
    'type' => 'datetime',
    'null' => false,
  ),
  'shared' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => true,
  ),
  'default_notice' => 
  array (
    'type' => 'char',
    'constraint' => 1,
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
);

/* end of file */