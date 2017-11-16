<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*                                                               
 |-------------------------------------------------------------- 
 | TABELA message                                           
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
  'story_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'character_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => true,
  ),
  'midia_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => true,
  ),
  'type' => 
  array (
    'type' => 'varchar',
    'constraint' => 2,
    'null' => true,
  ),
  'text_en' => 
  array (
    'type' => 'text',
    'null' => true,
  ),
  'text_pt' => 
  array (
    'type' => 'text',
    'null' => true,
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