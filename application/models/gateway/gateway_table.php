<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*                                                               
 |-------------------------------------------------------------- 
 | TABELA gateway                                           
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
  'region_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'category_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'midia_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => true,
  ),
  'name' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => false,
  ),
  'url' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => false,
  ),
  'rss' => 
  array (
    'type' => 'varchar',
    'constraint' => 255,
    'null' => false,
  ),
  'default_gateway' => 
  array (
    'type' => 'char',
    'constraint' => 1,
    'null' => false,
  ),
  'visible' => 
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