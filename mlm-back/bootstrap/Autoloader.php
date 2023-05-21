<?php

class Autoloader
{
    public static function routesRegister()
    {
        spl_autoload_register(function ($class) {
            $class = str_replace("\\", DIRECTORY_SEPARATOR, $class);
            $path = __DIR__ . "/../routes/{$class}.php";
            if (is_readable($path)) {
                require $path;
            }
        });
    }
}