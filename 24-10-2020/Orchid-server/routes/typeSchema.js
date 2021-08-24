let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let typeSchema = new Schema(
  {
    TypeItem:String,
    ShopId:String,
    count:{type:Number,default:0}
  },
  {
    collection:'types',
    timestamps: true
  }
 ),
 TypeItem = mongoose.model('TypeItem',typeSchema);
 
 module.exports = TypeItem