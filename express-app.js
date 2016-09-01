/*
 * Web frontend to patient.js
 */

'use strict'

var seneca = require('seneca')()
      .use('api')
      .use('seneca-amqp-transport')
      .client({ type:'amqp', pin:'role:patient' })


var app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(3000)
