## Description

S3-Innovate test repository.

## Installation

```bash
$ yarn
```

## Running the app
`http://localhost:3000`
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
(Not fully support yet)
```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Project Structure
We will separate our structure into:
- `modules`: includes feature modules of feature routes in the application
- `shared`: includes common modules, dto, entity, enums, filter, interfaces... that can be used by feature modules 

## Technology
- `nestjs`: v9.0
- `database`: postgresql
- `logger`: winston
- `orm`: TypeORM  

## Endpoints
- `Store device main information`:\ 
        Path: /device/store\
        Method: POST\
        Sample request body:\
        {\
        "deviceId": "ibm-878A66",\
        "deviceType": "computer1.0.0",\
        "deviceName": "VN1-1-3",\
        "groupId": "847b3b2f1b05dc4",\
        "dataType": "DATA",\
        "data": {\
        "fullPowerMode": false,\
        "activePowerControl": false,\
        "firmwareVersion": 1,\
        "temperature": 21,\
        "humidity": 53\
        },\
        "timestamp": 1629369697\
        }