module.exports = function api( options ) {

  var valid_ops = { new:'new', update:'update' }

  this.add( 'role:api,path:patients', function( msg, respond ) {
    this.act( 'role:patient', {
      cmd:   valid_ops[msg.operation],
      firstname:  msg.firstname,
      lastname: msg.lastname,
    }, respond )
  })


  this.add( 'init:api', function( msg, respond ) {
    this.act('role:web',{use:{
      prefix: '/api',
      pin:    'role:api,path:*',
      map: {
        patients: { GET:true, suffix:'/:operation' }
      }
    }}, respond )
  })

}
