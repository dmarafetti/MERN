## Setup standalone mongodb instance

### Pull docker image

```sh 
$ docker pull mongo:latest
```


### Run container

```sh 
$ docker run -d -p 27017:27017 --name=mongo-standalone \
        -e MONGO_INITDB_ROOT_USERNAME=root \
        -e MONGO_INITDB_ROOT_PASSWORD=toor \
        mongo:latest
```
