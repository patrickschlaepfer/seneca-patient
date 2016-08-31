/*
 *The basic microservice implementation
 */
 
module.exports = function patient(options) {

  this.add('role:patient,cmd:new', function sum(msg, respond) {
    respond(null, { answer: 'new:' + msg.firstname + ' ' +msg.lastname })
  })

  this.add('role:patient,cmd:update', function product(msg, respond) {
    respond(null, { answer: 'update: '+msg.firstname + ' '+ msg.lastname })
  })

  this.wrap('role:patient', function (msg, respond) {
    // msg.left  = Number(msg.left).valueOf()
    // msg.right = Number(msg.right).valueOf()
    this.prior(msg, respond)
  })

}
