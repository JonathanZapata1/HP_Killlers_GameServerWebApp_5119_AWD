<?php

if (version_compare(PHP_VERSION, '7.0', '<')) {
    echo "<p>You need to use PHP >= 7.0.0</p>";
       exit();
}

require_once './application/loader.php';
user::post_handler();
vote::post_handler();
require_once base_path . 'template/' . get_config('template') . '/tpl/main.php';