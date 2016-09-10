// client.js

require('seneca')()
  .use('nats-transport')
  .client({type:'nats'})
  .act({role: 'foo', cmd: 'bar', arg1: 1, arg2: 2}, console.log);
