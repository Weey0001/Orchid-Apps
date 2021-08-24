let express = require('express'),
  router = express.Router(),
  TypeItem = require('./typeSchema');

  router.route("/shops/:id")
    .get( async (req,res)=>{

      try {
        let result = await TypeItem.find({ ShopId: req.params.id })
        res.json(result)
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }

    })
    
  router.route('/addtype')
    .post( async (req,res)=>{
      let itemType = {
        TypeItem:req.body.TypeItem,
        ShopId:req.body.ShopId
      };
      
      let newTypeItem = new TypeItem(itemType);
      
      try {
        await newTypeItem.save()
        res.json()
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }

    })
    
  router.route('/deletetypeid/:id')
    .post( async (req,res)=>{

      try {
        let result = await TypeItem.findByIdAndDelete(req.params.id)
        res.json(result)
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }

    })
    
module.exports = router