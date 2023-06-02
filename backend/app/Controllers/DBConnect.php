<?php

namespace app\Controllers;

use PDO, PDOException;

class DBConnect
{
    static private $dbhost = '0.0.0.0';
    static private $dbuser = 'admin1';
    static private $dbpass = 'admin1';
    static private $dbname = 'users';

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