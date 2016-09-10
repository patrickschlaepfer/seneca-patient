// server.js

require('seneca')()
  .use('nats-transport')
  .add({role: 'foo', cmd: 'bar'}, function(msg, done) { return done(null, msg); })
  .listen({type:'nats'});
