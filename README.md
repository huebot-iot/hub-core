# Harness Native Transport

## Description
Microservice (TCP) for interfacing with native OS. This should be the only variable piece of the hub ecosystem allowing the for low barriers to compatibility. 

## Support
Only compatible with Ubuntu 22.04 (jammy) right now.

## Moving Forward
As we broaden our OS support I think we will keep it in a single repo and build OS-specific tagged containers.

## Build 
`docker build -t ghcr.io/harness-iot/native:[version] -t ghcr.io/harness-iot/native:latest .`

## Run (development):
```
docker run  -d \
-p 9000:9000  \
--privileged=true \
--volume /var/run/dbus:/var/run/dbus \
--name mqtt --restart=always ghcr.io/harness-iot/native:[version]|latest
```