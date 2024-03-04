#
# Docker Image Name
#
IMAGE_NAME = mern-backend

#
# Run docker build in order to build the image.
#
# Cache is disabled
#
.PHONY: build
build:
	docker build --progress=plain --no-cache -t $(IMAGE_NAME) .
#
# Removes image
#
.PHONY: clean
clean:
	docker image rm --force $(IMAGE_NAME)

