<?php

namespace routes;
include "../bootstrap/Autoloader.php";

use \app\Controllers;

class Router
{
    public function rout()
    {
        switch ($_POST['q']) {
            case 'login':
            {
                if (isset($_POST['login']) && isset($_POST['password'])) {
                    $conn = Controllers\DBConnect::connect();
                    $log = new Controllers\Login($conn);
                    $log->login();
                }
            }
            case 'registration':
            {
                if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['email'])) {
                    $conn = Controllers\DBConnect::connect();
                    $reg = new Controllers\Registration($conn);
                    $reg->registration();
                }
            }
        }
    }
}