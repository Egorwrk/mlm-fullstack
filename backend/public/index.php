<?php
$config = parse_ini_file("../config/permissionConfig.ini");

header("Access-Control-Allow-Origin: {$config['permittedUrl']}");
header('Access-Control-Allow-Credentials: true');
include "../bootstrap/Autoloader.php";

use \routes\Router;

session_start();
$route = new Router();
$route->rout();