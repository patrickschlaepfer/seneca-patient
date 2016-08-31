/*
 * pins the action patient
 * and transport over tcp
 */
require('seneca')()

  .use('patient')

  // listen for role:patient messages
  // IMPORTANT: must match client
  .listen({ type: 'tcp', pin: 'role:patient' })
