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
- pateint-client.js - client for patient-service.js

#### patient-service.js

Start the patient-service by typing node patient-service.js

In a browser call the following URL
```
http://localhost:10101/act?role=patient&cmd=new&firstname=Patrick&lastname=Schlaepfer
```

#### patient-client.js

Calls patient-service.js

```
node patient-client.js
```
