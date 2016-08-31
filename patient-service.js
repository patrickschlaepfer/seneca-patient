/*
 * Listen service
 * Also accepts port, host, spec as arguments for Listen
 */
require('seneca')()
  .use('patient')
  .listen()
