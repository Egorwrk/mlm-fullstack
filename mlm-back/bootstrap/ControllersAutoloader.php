<?php

class ControllersAutoloader
{
    public static function controllersRegister()
    {
        spl_autoload_register(function ($class) {
            $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
            $path = __DIR__ . "/../app/Controllers/{$class}.php";
            if (is_readable($path)) {
                require $path;
            }
        });
    }
}