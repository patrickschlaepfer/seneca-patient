/*
 * Client for patient-pin-service
 */
require('seneca')()

  // a local pattern
  .add('say:hello', function (msg, respond){ respond(null, {text: "Hi!"}) })

  // send any role:patient patterns out over the network
  // IMPORTANT: must match listening service
  .client({ type: 'tcp', pin: 'role:patient' })

  // executed remotely
  .act('role:patient,cmd:new,firstname:Patrick,lastname:Schlaepfer',console.log)

  // executed locally
  .act('say:hello',console.log)
