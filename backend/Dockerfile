FROM ubuntu:latest

WORKDIR /var/www/html


ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get --allow-releaseinfo-change update
RUN apt-get update -y --fix-missing
RUN apt-get upgrade -y
RUN apt-get install -y php
RUN apt-get install -y php8.1-fpm
RUN apt-get install -y php-mysql
RUN apt-get install -y mysql-client
RUN apt-get install -y mysql-server
RUN apt-get install -y nginx

RUN usermod -d /var/lib/mysql/ mysql

COPY . .

VOLUME ["/var/www/html"]
COPY ./nginx /etc/nginx/sites-enabled

CMD /etc/init.d/php8.1-fpm start -F && service mysql start && nginx -g "daemon off;"

EXPOSE 80