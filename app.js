require('seneca')()
  .use('patient') // finds ./patient.js in local folder
  .act('role:patient,cmd:new,firstname:Patrick,lastname:Schlaepfer', console.log)
