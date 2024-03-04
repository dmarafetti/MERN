#
# Builds recursively
#
.PHONY: build
build:
	cd backend  && $(MAKE)
	cd frontend && $(MAKE)
#
# Start stack with docker compose
#
.PHONY: run
run:
	docker compose --env-file ./.env up

#
# Stop stack
#
.PHONY: stop
stop:
	docker compose down
