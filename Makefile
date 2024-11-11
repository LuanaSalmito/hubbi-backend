DOCKER_COMPOSE = docker-compose
PRISMA = npx prisma
NEST = npx nest
NODE_ENV = development

BUILD_DIR = dist

up:
	@$(DOCKER_COMPOSE) up -d
	@echo "Docker containers started."

down:
	@$(DOCKER_COMPOSE) down
	@echo "Docker containers stopped."

migrate:
	@$(PRISMA) migrate dev --name init
	@echo "Database migration applied."

prisma-generate:
	@$(PRISMA) generate
	@echo "Prisma client generated."

install:
	@npm install
	@echo "Dependencies installed."

build:
	@$(NEST) build
	@echo "NestJS project built."

start: build up
	@$(NEST) start --prod
	@echo "NestJS server started in production mode."

start-dev:
	@$(NEST) start --watch
	@echo "NestJS server started in development mode with watch."


stop:
	@$(DOCKER_COMPOSE) down
	@$(NEST) stop
	@echo "Server and Docker containers stopped."


clean:
	@$(DOCKER_COMPOSE) down -v --rmi all --remove-orphans
	@echo "Cleaned up Docker containers, volumes, and images."

test:
	@$(NEST) test
	@echo "Tests executed."
