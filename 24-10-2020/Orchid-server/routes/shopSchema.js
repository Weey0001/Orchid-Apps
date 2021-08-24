let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let shopShema = new Schema(
  {
    pseudo:String,
    email:String,
    aboutUs:String,
    phone:String,
    hot:{type:Boolean,default:false},
    top5:{type:Boolean,default:false},
    top10:{type:Boolean,default:false},
    top20:{type:Boolean,default:false},
    imgP:String,
    imgC:String,
    view:{type:Number,defautl:0},
    addFavoris:Number
  },
  {
    collection:'shops',
    timestamps: true
  }
 ),
 Shop = mongoose.model('Shop',shopShema);
 
 module.exports = Shop