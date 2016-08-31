/*
 * Listen service
 * Also accepts port, host, spec as arguments for Listen
 *
 * seneca.client({ port: 8080, host: '192.168.0.2' })
 *   → seneca.listen({ port: 8080, host: '192.168.0.2' })
 */
require('seneca')()
  .use('patient')
  .listen()
