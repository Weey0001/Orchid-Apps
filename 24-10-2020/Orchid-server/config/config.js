let mongoose = require('mongoose'),
    Item = require("../routes/itemSchema"),
  TypeItem = require('../routes/typeSchema'),
  Shop = require('../routes/shopSchema'),
  Users = require('../routes/userSchema'),
  AppData = require('../routes/appDataSchema')
 
let takeData = async () => {

  let valueviewItem = 0
  let valueviewUserRated = 0
  let valueviewShop = 0

  let items = await Item.find()
  items.forEach(item=>{
    valueviewItem += item.view,
    valueviewUserRated += item.userRated
  })

  let shops = await Shop.find()
  shops.forEach(shop=>{
    valueviewShop += shop.view
  })

  let data = {
    viewTotalItems : valueviewItem,
    viewApp: valueviewShop,
    TotalView: valueviewItem+valueviewShop,
    totaluserRated: valueviewUserRated
  }

  let newAppData = new AppData(data)
  newAppData.save()

}

module.exports = () => {

  setInterval(() => {
    takeData()
  }, 3600000 );
  
}
