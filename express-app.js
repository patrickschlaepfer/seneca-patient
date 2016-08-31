/*
 * Web frontend to patient.js
 */

var seneca = require('seneca')()
      .use('api')
      .client({ type:'tcp', pin:'role:patient' })

var app = require('express')()
      .use(require('body-parser').json())
      .use(seneca.export('web'))
      .listen(3000)
