<?php
session_destroy();
header('Location: index.php');


//header('Content-type: application/json; charset=UTF-8');
//
//
//$message = [];
//$message["users"] = [];

//ниже код для добавление новой строки в таблицу
//try {
//    $conn = new PDO("mysql:host=mysql;dbname=db", 'root', 'root');
//    $pass = md5('yura');
//    $sql = "INSERT INTO users_auth (login, hash_password, email) VALUES ('yura', '$pass', 'yura@gmail.com')";
//    $affectedRowsNumber = $conn->exec($sql);
//    echo "В таблицу Users добавлено строк: $affectedRowsNumber";
//} catch(PDOException $e) {
//    echo "Connection failed: " . $e->getMessage() . PHP_EOL;
//}

//ниже код для изменения строки в таблице
//try {
//    $conn = new PDO("mysql:host=mysql;dbname=db", 'root', 'root');
//    $pass = md5('root');
//    $sql = "UPDATE users_auth SET hash_password = '$pass' WHERE id = 1";
//    $affectedRowsNumber = $conn->exec($sql);
//    echo "Обновлено строк: $affectedRowsNumber";
//}
//catch (PDOException $e) {
//    echo "Database error: " . $e->getMessage();
//}


//ниже код для создания базы данных db
//try {
//    // подключаемся к серверу
//    $conn = new PDO("mysql:host=mysql", "root", "root");
//
//    // SQL-выражение для создания базы данных
//    $sql = "CREATE DATABASE db";
//    // выполняем SQL-выражение
//    $conn->exec($sql);
//    echo "Database has been created";
//}
//catch (PDOException $e) {
//    echo "Database error: " . $e->getMessage();
//}


//ниже код для создания таблицы
//try {
//    // подключаемся к серверу
//    $conn = new PDO("mysql:host=mysql;dbname=db", "root", "root");
//
//    // SQL-выражение для создания таблицы
//    $sql = "create table users_auth (
//        id integer NOT NULL auto_increment primary key,
//        login varchar(30) NOT NULL UNIQUE,
//        hash_password varchar(128) UNIQUE,
//        email varchar(255) NOT NULL UNIQUE
//    );";
//    // выполняем SQL-выражение
//    $conn->exec($sql);
//    echo "Table Users has been created";
//}
//catch (PDOException $e) {
//    echo "Database error: " . $e->getMessage();
//}

//ниже код для проверки таблицы
//try {
//    // подключаемся к серверу
//    $conn = new PDO("mysql:host=mysql;dbname=db", "root", "root");
//
//    $res = $conn->query("SELECT * FROM users_auth");
//    if (!$res) {
//        echo "can't to complete request: !! " . "\n";
//    } else {
//        while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
//            $message["users"][] = [
//                "id" => $row["id"],
//                "login" => $row["login"],
//                "hash_password" => $row["hash_password"],
//                "email" => $row["email"],
//            ];
//        }
//    }
//} catch (PDOException $e) {
//    echo "Database error: " . $e->getMessage();
//}
//
//
//echo json_encode($message) . PHP_EOL;
//echo md5('root');