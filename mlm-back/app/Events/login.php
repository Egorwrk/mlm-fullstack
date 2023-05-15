<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
require 'config.php';
if (!empty($_SESSION['login'])) {
    echo $_SESSION['login'] . ' is auth';
}
if (isset($_POST['login'])) {
    $errMsg = '';
    $login = $_POST['login'];
    $password = $_POST['password'];
    if ($login == '') $errMsg = 'Enter login';
    if ($password == '') $errMsg = 'Enter password';
    if ($errMsg == '') {
        try {
            $stmt = $connect->prepare('SELECT * FROM users_auth WHERE login = :login');
            $stmt->execute(array(':login' => $login));
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($data == false) {
                $errMsg = "User $login not found.";
                echo $errMsg;
            } else {
                if (md5($password) == $data['hash_password']) {
                    echo 'auth success';
                    $_SESSION['login'] = $data['login'];
                    $_SESSION['id'] = $data['id'];
                    exit;
                } else {
                    $errMsg = 'Password not match.';
                    echo $errMsg;
                }
            }
        }
        catch(PDOException $e) {
            $errMsg = $e->getMessage();
        }
    } else {
        $errMsg = 'Error in Logging In.';
    }
}