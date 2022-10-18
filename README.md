# Huebot Hub Core

## Description
Microservice (TCP) for handling core hub functions used by other components

## Build 
`docker build -t ghcr.io/huebot-iot/hub-core:[version] -t ghcr.io/huebot-iot/hub-core:latest .`

## Run (development):
```
docker run  -d \
-p 9000:9000  \
--privileged=true \
--volume /var/run/dbus:/var/run/dbus \
--name mqtt --restart=always ghcr.io/huebot-iot/hub-core:[version]|latest
```