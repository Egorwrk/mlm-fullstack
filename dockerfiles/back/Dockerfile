FROM php:8.1-fpm

RUN apt-get update && docker-php-ext-install pdo_mysql

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli

EXPOSE 3003