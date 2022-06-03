<?php
// Dejo de ser útil desde que deje de usar CMangos ---->Borrar esto cuando sea posible.

$core_config['salt_field'] = 'salt';
$core_config['verifier_field'] = 'verifier';

if($config['server_core'] == 5) { 
	$core_config['salt_field'] = 's';
	$core_config['verifier_field'] = 'v';
}