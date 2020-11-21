up:
	docker-compose up -d
upp:
	docker-compose up --build -d
down:
	docker-compose down
logs:
	docker-compose logs
cc:
	docker-compose run --rm php php bin/console cache:clear
comi:
	docker-compose run --rm php composer install
comu:
	docker-compose run --rm php composer update
