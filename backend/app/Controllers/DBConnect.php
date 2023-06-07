<?php

namespace app\Controllers;

use PDO, PDOException;

class DBConnect
{
    static private $dbhost;
    static private $dbuser;
    static private $dbpass;
    static private $dbname;

    public function __construct($dbhost, $dbuser, $dbpass, $dbname) {
        self::$dbhost = $dbhost;
        self::$dbuser = $dbuser;
        self::$dbpass = $dbpass;
        self::$dbname = $dbname;
    }

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