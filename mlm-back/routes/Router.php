<?php

include "../bootstrap/ControllersAutoloader.php";
ControllersAutoloader::controllersRegister();

class Router
{
    public function rout()
    {
        switch ($_POST['q']) {
            case 'login':
            {
                if (isset($_POST['login']) && isset($_POST['password'])) {
                    $conn = DBConnect::connect();
                    $log = new Login($conn);
                    $log->login();
                }
            }
            case 'registration':
            {
                if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['email'])) {
                    $conn = DBConnect::connect();
                    $reg = new Registration($conn);
                    $reg->registration();
                }
            }
        }
    }
}