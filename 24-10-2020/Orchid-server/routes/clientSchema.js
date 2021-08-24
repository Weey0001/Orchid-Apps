let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let clientSchema = new Schema(
  {
    pseudo:String,
    email:String,
    phone:String,
    pass:String
  },{
    collection:'client',
    timestamps:true
  }
),

Client = mongoose.model('Client',clientSchema)

module.exports = Client;