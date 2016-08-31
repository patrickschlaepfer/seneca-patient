# seneca-patient

Some playground use seneca framework. To evalute what might be possible,
and what might not.
Coming a far way from heavy ESB implementation to Springboot microservice,
but still in search of a lightweight microservice implementation.

## Installation

Getting the need node.js modules

```
npm install
```

### Files

- patient.js - the microservice
- patient-tree - will print the tree
- app.js - start script
- patient-service.js - patient service, listens on port 10101
- patient-client.js - client for patient-service.js
- patient-pin-service.js - pins the patient services
- patient-pin-client-js - pins the patient client
- express-app.js - frontend app using express.js
- api.js - the bridge between the exposed serivce and the internal service

#### patient-service.js

Start the patient-service by typing node patient-service.js

In a browser call the following URL
```
http://localhost:10101/act?role=patient&cmd=new&firstname=Patrick&lastname=Schlaepfer
```

#### patient-client.js

Calls patient-service.js

```
$ node patient-client.js
```

# Web Server Integration

Seneca is not a web framework. But you still need to connect it up to your Web
service API.

The most important thing to remember is that you don't want to expose your
internal action patterns to the outside world. That's no good security practice.
Instead, define a set of API patterns, say with property role:api. Then you
can hook them up to your internal microservices.

To start the whole chain you have to start both express-app.js and patient-pin-service.js

```
$ node patient-pin-service.js
$ node express-app.js
```

Then call the api using your browser
```
http://localhost:3000/api/patients/new?firstname=Patrick&lastname=Schlaepfer
```

# Docker

Build the docker container user docker-compose, as a rabbitmq will be included.

```
docker-compose -f docker-compose.yml up
```
