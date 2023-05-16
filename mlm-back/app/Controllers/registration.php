<?php
require 'config.php';
header('Access-Control-Allow-Origin: http://localhost:3000');
if (isset($_POST['login'])) {
    $errMsg = '';
    $login = $_POST['login'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    try {
        $sql = "SELECT * FROM users_auth WHERE login = '$login'";
        $stmtuser = $connect->query($sql);
        $datauser = $stmtuser->fetch(PDO::FETCH_ASSOC);
        if (empty($datauser)) {
            $stmt = $connect->prepare('INSERT INTO users_auth (login, hash_password, email) VALUES (:login, :hash_password, :email)');
            $stmt->execute(array(':login' => $login, ':hash_password' => md5($password), ':email' => $email));
            $stmtuser = $connect->prepare('SELECT * FROM users_auth WHERE login = :login');
            $stmtuser->execute(array(':login' => $login));
            $datauser = $stmtuser->fetch(PDO::FETCH_ASSOC);
            $_SESSION['login'] = $datauser['login'];
            $_SESSION['email'] = $datauser['email'];
            $_SESSION['hash_password'] = $datauser['hash_password'];
            echo 'registration completed';
            exit;
        } else {
            echo 'this login already exists';
            exit;
        }
    }
    catch(PDOException $e) {
        echo $e->getMessage();
    }
}