<?php

namespace app\Controllers;

use PDO, PDOException;

class Login
{
    private $connect;

    public function __construct(PDO $pdo)
    {
        $this->connect = $pdo;
    }

    public function login()
    {
        if (isset($_POST['login'])) {
            $errMsg = '';
            $login = $_POST['login'];
            $password = $_POST['password'];
            if ($login == '') $errMsg = 'Enter login';
            if ($password == '') $errMsg = 'Enter password';
            if ($errMsg == '') {
                try {
                    $stmt = $this->connect->prepare('SELECT * FROM users WHERE login = :login');
                    $stmt->execute(array(':login' => $login));
                    $data = $stmt->fetch(PDO::FETCH_ASSOC);
                    if ($data == false) {
                        $errMsg = "User $login not found.";
                        echo $errMsg;
                    } else {
                        if (md5($password) == $data['hash_password']) {
                            setcookie("login", $login, 0, '/');
                            echo 'auth success';
                            exit;
                        } else {
                            $errMsg = 'Password not match.';
                            echo $errMsg;
                        }
                    }
                } catch (PDOException $e) {
                    echo $e->getMessage();
                }
            } else {
                echo 'Error in Logging In.';
            }
        }
    }
}