/*
 * pins the action patient
 * and transport over tcp
 */
require('seneca')()

  .use('patient')
  .use('seneca-amqp-transport')

  // listen for role:patient messages
  // IMPORTANT: must match client
  .listen({ type: 'amqp', pin: 'role:patient' })
