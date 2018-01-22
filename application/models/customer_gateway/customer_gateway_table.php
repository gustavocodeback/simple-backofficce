<?php defined('BASEPATH') OR exit('No direct script access allowed');

/*                                                               
 |-------------------------------------------------------------- 
 | TABELA customer_gateway                                           
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
  'customer_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'gateway_id' => 
  array (
    'type' => 'int',
    'constraint' => 11,
    'null' => false,
  ),
  'personal_category_id' => 
  array (
    'type'       => 'int',
    'constraint' => 11,
    'null'       => null,
  ),
  'status' => 
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