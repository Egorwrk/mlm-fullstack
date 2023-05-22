<?php
header('Access-Control-Allow-Origin: *');
include "../bootstrap/Autoloader.php";

use \routes\Router;

session_start();
$route = new Router();
$route->rout();