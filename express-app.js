/*
 * Web frontend to patient.js
 */

'use strict'

var seneca = require('seneca')()
      .use('api')
      .use('nats-transport')
      .client({ type:'nats', pin:'role:patient:*' })


var app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(3000)
