run:
	docker run -d -p 80:80 -v back:/var/www/html --rm --name ubu ubuimg
run-dev:
	docker run -d -p 80:80 -v "/Users/wrk/projects/mobile-layouts-manager/backend:/var/www/html" -v mysql:/var/lib/mysql --rm --name ubu ubuimg
build:
	docker build -t ubuimg .
stop:
	docker stop ubu