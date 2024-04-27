# Comandos

## Para ver las imágenes locales
```bash
docker images
```
## Para descargar una imágen
```bash
docker pull node:18
```

## Para borrar una imágen
```bash
docker image rm node:18
```

## Para crear un contenedor

Se necesita el nombre de la imagen a partir de la cual se creará en el contenedor. En el comando la imagen base es mongo.

```bash
docker create mongo
docker create --name monguito mongo
docker container create mongo 
```
Este comando nos devolverá el ID del nuevo contenedor

## Para iniciar un contenedor
```bash
docker start 8939b8a0dc0dd8edd4be163d2195570d54dfc12b0a4b2a30ecf320774a25ca87
docker start monguito
```

## Para ver los contenedores en ejecución

Los IDs que se muestran son equivalentes a los que devuelve la creación de los mismos.

```bash
docker ps
```
## Para ver todos los contenedores
```bash
docker ps -a
```
## Para detener un contenedor
```bash
docker stop fdeb95f02d05
```
## Para borrar un contenedor
```bash
docker rm nombre_contenedor
```

## Para borrar un contenedor
```bash
docker rm nombre_contenedor
```

# Port Mapping

Recibimos una conexión y queremos mapearla al puerto de algún contenedor.

```bash
docker create -p27017:27017 --name monguito mongo
```

## Para escuchar los logs de un contenedor
```bash
docker logs -follow monguito
docker logs monguito
```

## Para arrancar rápidamente un contenedor

La d significa detached, para ejecutar el contenedor en segundo plano.

```bash
docker run -d mongo
docker run --name monguito -p27018:27017 -d mongo
```
# Para contectar una aplicación a un contenedor

La configuración dependerá de la imágen.
```bash
docker create -p27018:27017 --name monguito -e MONGO_INITDB_ROOT_USERNAME=rafo -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```

# Para crear una red de contenedores

## Para ver las redes existentes
```bash
docker network ls
```
## Para crear una red
```bash
docker network create mired
```
## Para eliminar una red
```bash
docker network rm mired
```
---
## Para crear una imagen usando un Dockerfile
```bash
docker build -t name:1.0.0
```

## Para crear un contenedor con red
```bash
docker create -p27018:27017 --name monguito --network mired -e MONGO_INITDB_ROOT_USERNAME=rafo -e MONGO_INITDB_ROOT_PASSWORD=password mongo
```
## Para crear un contenedor de una imagen propia
```bash
docker create -p3000:3000 --name chanchito --network mired miapp:1
```
# Docker Compose
## Para ejecutar el docker compose
```bash
docker compose up
docker compose -f docker-compose-dev.yml up
```
## Para borrar contenedores e imágenes creados por docker compose
```bash
docker compose down
```

# Volúmenes

Existen 3 tipos:
- Anónimo: solo indicas la ruta
- Anfitrión o host: tu decides donde
- Nombrado: Puede ser reutilizado por otras imágenes
