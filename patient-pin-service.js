/*
 * pins the action patient
 * and transport over tcp
 */
require('seneca')()

  .use('patient')
  .use('nats-transport')

  // listen for role:patient messages
  // IMPORTANT: must match client
  .listen({ type: 'nats', pin: 'role:patient:*' })
