<?php
header('Access-Control-Allow-Origin: http://45.12.239.135:3000');
header('Access-Control-Allow-Credentials: true');
include "../bootstrap/Autoloader.php";

use \routes\Router;

session_start();
$route = new Router();
$route->rout();