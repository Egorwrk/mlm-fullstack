<?php

namespace app\Controllers;

use PDO, PDOException;

class DBConnect
{
    static private $dbhost = 'mysql';
    static private $dbuser = 'root';
    static private $dbpass = 'root';
    static private $dbname = 'db';

    public static function connect()
    {
        try {
            return new PDO("mysql:host=" . self::$dbhost . ";dbname=" . self::$dbname, self::$dbuser, self::$dbpass);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return 1;
    }
}