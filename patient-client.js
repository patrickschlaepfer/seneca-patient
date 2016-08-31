require('seneca')()
  .client()
  .act('role:patient,cmd:new,firstname:Patrick,lastname:Schlaepfer',console.log)
