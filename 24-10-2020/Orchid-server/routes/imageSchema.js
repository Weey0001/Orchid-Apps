let mongoose = require('mongoose'),
Schema = mongoose.Schema;

let imageShema = new Schema(
  {
    idItem:String,
  },
  {
    collection:"images",
    timestamps:true
  }
),

Images = mongoose.model("Images",imageShema)

module.exports = Images