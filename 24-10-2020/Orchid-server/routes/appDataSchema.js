let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let appDataSchema = new Schema({
   viewApp:{type:Number , default:0},
   viewTotalItems:{type:Number, default:0},
   TotalView:{type:Number, default:0},
   totaluserRated:{type:Number, default:0}
},{
  collection:'appData',
  timestamps:true
}),

AppData = mongoose.model("AppData",appDataSchema);

module.exports = AppData;

