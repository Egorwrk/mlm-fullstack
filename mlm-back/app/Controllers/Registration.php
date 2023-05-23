<?php

namespace app\Controllers;

use PDO, PDOException;

class Registration
{
    private $connect;

    public function __construct(PDO $pdo)
    {
        $this->connect = $pdo;
    }

    public function registration()
    {
        $login = $_POST['login'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        try {
            $sql = "SELECT * FROM users WHERE login = '$login'";
            $stmtuser = $this->connect->query($sql);
            $datauser = $stmtuser->fetch(PDO::FETCH_ASSOC);
            if (empty($datauser)) {
                $stmt = $this->connect->prepare('INSERT INTO users (login, hash_password, email, templates) VALUES (:login, :hash_password, :email, :templates)');
                $stmt->execute(array(':login' => $login, ':hash_password' => md5($password), ':email' => $email, ':templates' => '{}'));
                $stmtuser = $this->connect->prepare('SELECT * FROM users WHERE login = :login');
                $stmtuser->execute(array(':login' => $login));
                echo 'registration completed';
                exit;
            } else {
                echo 'this login already exists';
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}