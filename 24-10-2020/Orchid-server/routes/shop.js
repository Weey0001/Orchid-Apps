let express = require("express"),
  router = express.Router(),
  Shop = require('./shopSchema')

  router.route('/addShop')
    .post( async (req,res)=>{
      
      try {

        let {email} = req.body
        let newShop = new Shop(req.body)        
        await newShop.save()

        let result = await Shop.find({email: email})
        res.json(result[0]._id)   
         
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }

    })

  router.route("/viewShop/:id")
    .post( async (req,res)=>{

      try {
        let result = await Shop.findById(req.params.id)
        result.view += 1
        await result.save()
        res.json()
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }
        
    })

  router.route("/shopInfo/:id")
    .get( async (req,res)=>{

      try {
        let result  = await Shop.findById(req.params.id)
        let item = {
          view: result.view,
          imgC: result.imgC,
          imgP: result.imgP
        }
        res.json(item)
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }

    })
  
  router.route('/allShop')
    .get(async(req,res)=>{
      let result = await Shop.find()
      res.json(result)
    })


module.exports = router