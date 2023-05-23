<?php

namespace app\Controllers;

use PDO, PDOException;

class ReturnTemplates
{
    private $connect;

    public function __construct(PDO $pdo)
    {
        $this->connect = $pdo;
    }

    public function returnTemplates()
    {
        $login = $_COOKIE['login'];
        try {
            $sql = "SELECT * FROM users WHERE login = '$login'";
            $stmtuser = $this->connect->query($sql);
            $datauser = $stmtuser->fetch(PDO::FETCH_ASSOC);
            if (empty($datauser)) {
                echo "this user doesn't exists";
            } else {
                echo($datauser['templates']);
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }
}