let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let itemSchema = new Schema(
  {
    TypeItem:String,
    Shop:String,
    ShopId:String,
    KeyItem:String,
    Name:String,
    Img:String,
    MobilImg:Array,
    Price:Number,
    Phone:String,
    Email:String,
    Sailor:String,
    Description:String,
    folder:String,
    newPromotion:{type:Number ,default:0},
    liked:{type:Number , default:0},
    promotion:{type:Boolean , default:false},
    globalProm:{type:Boolean , default:false},
    view:{type:Number , default:0},
    rating:{type:Number , default:0},
    userRated:{type:Number , default:0},
    hot:{type:Boolean,default:false},
    top5:{type:Boolean,default:false},
    top10:{type:Boolean,default:false},
    top20:{type:Boolean,default:false}
  },
  {
    collection:'items',
    timestamps: true
  }
 ),
 Item = mongoose.model('Item',itemSchema);
 
 module.exports = Item