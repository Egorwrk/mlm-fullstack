<?php
header('Access-Control-Allow-Origin: *');
include "../bootstrap/Autoloader.php";
Autoloader::routesRegister();
session_start();
$route = new Router();
$route->rout();

