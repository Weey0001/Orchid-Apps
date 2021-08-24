let express = require('express'),
  fs = require('fs-extra'),
  router = express.Router(),
  Item = require('./itemSchema'),
  TypeItem = require('./typeSchema');

  router.route("/foundItemSpeType/:typeItem")
    .get( async (req,res)=>{
      
      let option = {TypeItem : req.params.typeItem}

      try {
        
        let items = await Item.find(option)
        res.json(items)

      } catch (error) {
        res
          .status(400)
          .json("Error" + error)
      }

    });


  router.route('/search')
    .post( async (req,res)=>{
      
      let itemKey = req.body.Name,
      key = itemKey.toLowerCase();
      query = { key: {$regex: key }}
      
      try {
        let result = Item.find(query)
        res.json(result)
      } catch (error) {
        res
          .status(400)
          .json("Error" + error )
      }

    });

  router.route('/search/:id')//search item in specific Shop
    .post( async (req,res)=>{
      
      let {
        Name,
        typeItem
      } = req.body,
      key = Name.toLowerCase();

      if(typeItem==="All"){

        if(key===""){
          res.json("false")
        }else{

          let options = {
            ShopId: req.params.id,
            KeyItem: { $reg: key}
          }

          try {
            let results = await Item.find(options)
            res.json(results)
          } catch (error) {
            res
              .status(400)
              .json("Error"+error)
          }
      
        }

      }else{

        let options = { 
          ShopId: req.params.id , 
          TypeItem: typeItem , 
          itemKey: {
            $regex: key 
          }
        }

        try {
          let results = await Item.find(options)
          res.json(results)        
        } catch (error) {
          res
            .status(400)
            .json("Error" + error)
        }
      
      }

  });

  router.route('/promotions/all')//get all items how are promoted
    .get( async (req,res)=>{

      try {
        let results = await Item.find({promotion:true})
        res.json(results)
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }

    });

  router.route('/getAllglobalProm')
    .get( async (req,res)=>{

      try {
        let results = await Item.find({ globalProm: true })
        res.json(results)
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error)
      }

    })

  router.route('/promotionsSpeShop/:id')//get all items who are promoted from specific Shop
    .post( async (req,res)=>{

      let options = {
        ShopId: req.params.id,
        promotion: true
      }

      try {
        let results = await Item.find(options)
        res.json(results)
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }

    });

  router.route( "/promSpeItem/:id" )
    .get( async ( req , res ) => {

      try {

        let IdSearch = { _id : req.params.id }

        let results = await Item.find ( IdSearch )
        let BoolRes = results [ 0 ].promotion

        res.json ( BoolRes )
        
      } catch ( error ) {
        
      }

    })

  // active

  router.route('/changeRating/:id')
    .post(async (req,res)=>{
      try {
        let {
          fromClientRating
        } = req.body;
        let result = await Item.findById(req.params.id)
        let {
          userRated,
          rating
        } = result
        let newRating = (userRated*rating+Number(fromClientRating))/(userRated+1)
        result.userRated +=1
        result.rating = newRating
        result.save()
        .then(_=>{
          res.json('rated')
        })
      } catch (error) {
        res.status(404)
          .json(error)
      }
    })
  
  router.route('/hot')
    .get(async (req,res) => {
      let hot = await Item.find({hot:true})
      console.log(hot)
      // if(hot.length<1){
        res.json()
      // }else{
      //   res.json(hot)
      // }
    })
    .post(async (req,res) =>{
      try {
        await Item.update(
            {_id:req.body.id},
            {
              hot:req.body.bool
            }
          )
        res.json()        
      } catch (error) {
        res.status(400)
          .json(error)
      }
    })
  
  router.route('/top5')
    .get(async (req,res) => {
      let top5 = await Item.find({top5:true})
      if(top5.length<1){
        res.json()
      }else{
        res.json(top5)
      }
    })
    .post(async (req,res) =>{
      try {
        await Item.update(
            {_id:req.body.id},
            {
              top5:req.body.bool
            }
          )
        res.json()       
      } catch (error) {
        res.status(400)
          .json(error)
        
      }

    })
  
  router.route('/top10')
    .get(async (req,res) => {
      let top10 = await Item.find({top10:true})
      if(top10.length<1){
        res.json()
      }else{
        res.json(top10)
      }
    })
    .post(async (req,res) =>{
      try {
        await Item.update(
            {_id:req.body.id},
            {
              top10:req.body.bool
            }
          )
        res.json()        
      } catch (error) {
        res.status(400)
          .json(error)
        
      }

    })
  
  router.route('/top20')
    .get(async (req,res) => {
      let top20 = await Item.find({top20:true})
      if(top20.length<1){
        res.json()
      }else{
        res.json(top20)
      }
    })
    .post(async (req,res) =>{
      try {
        await Item.update(
            {_id:req.body.id},
            {
              top20:req.body.bool
            }
          )
        res.json()       
      } catch (error) {
        res.status(400)
          .json(error)
      }

    })
    
  router.route('/allitems/:id')//pick all items from Server
    .get( async (req,res)=>{

      let option = {ShopId:req.params.id}

      try {
        let result = await Item.find(option)
        res.json(result)
      } catch (error) {

        res
          .status(400)
          .json("Error" + error)

      }
      
    });

  router.route('/viewItem/:id')
    .post( async (req,res)=>{

      try {

        let result = await Item.findById(req.params.id)
        result.view += 1
        await result.save()
        res.json()

      } catch (error) {
        res
          .status(400)
          .json("Error" + error)
        
      }

    })

  router.route("/addTestItem")
    .post(async(req,res)=>{
      let newItem = new Item(req.body)
      newItem.save(_=>console.log('testItem added'))
      console.log('test added')
      res.json('test added')
    })

  router.route('/addMultImg')
    .post(async(req,res)=>{
      let {
        base64,
        id,
        folder,
        name,
        price,
        type,
        description,
        info
      } = req.body
      key = name.toLowerCase().trim();

      let result = await Item.find({folder:`${folder}`})

      if(result.length===0){
        let item = {
          TypeItem:type,
          Shop:info.pseudo,
          ShopId:info.shopId,
          KeyItem:key,
          Name:name,
          Img:`/public/images/${info.shopId}/${folder}/${id}.jpg`,
          MobilImg:[id],
          Price:price,
          Phone:info.phone,
          Email:info.email,
          Sailor:info.lastName,
          Description:description,
          folder:folder,
        }
        let newItem = new Item(item)
        
        newItem
          .save(_=>console.log('item Created'))
        let resType = await TypeItem.findById(type)
        resType.count+=1
        resType.save(_=>console.log('Count Type increase'))
      }else{
        let result = await Item.find({folder:`${folder}`})
        result[0].MobilImg.push(id)
        result[0]
          .save(_=>console.log('item Updated'))
          
      }

      try {
        fs.writeFile(
          "./public/images/image.jpg",
          base64,
          {
            encoding:'base64',
            mode:254
          }
        )
        .then(
          (chunc,byte)=>
            console.log(chunc,byte)
        )
        fs.outputFile(
          `./public/images/${info.shopId}/${folder}/${id}.jpg`,
          base64,
          {
            encoding:'base64'
          },
          async () => {
          
            let result = await Item.find({folder:folder})
            console.log(result[0].MobilImg)
            res.json("done")
            console.log("done")
          }
        )  
      } catch (error) {
        console.log(error)
      }

    })

  router.route("/add")//add item to Server
    .post( async (req,res)=>{
      // let debut = new Date().getMilliseconds()

      let {info} = req.body;

      let {
          pseudo,
          firstName,
          lastName,
          email,
          phone,
          shopId,
        } = info;
      let base64DataOrg = req.body.fileOrg,
      base64DataWin = req.body.fileWin,
        {
          name,
          price,
          type,
          description,
          mobilId
        }= req.body,
        key = name.toLowerCase().trim();

        let ImgItem = `http://localhost:5000/static/images/${shopId}/${name.trim()}.jpg`,
        item = {
          TypeItem:type.trim(),
          Shop:pseudo,
          ShopId:shopId,
          Name:name.trim(),
          KeyItem:key,
          Img:ImgItem,
          Price:price.trim(),
          Phone:phone.trim(),
          Email:email.trim(),
          Sailor:firstName + " " + lastName,
          Description:description.trim(),
          MobilImg:`${mobilId}`
        };

      try {
        let info = await fs.pathExists(
          './public/images/'+`${shopId}/items/${mobilId}`
        )
        if(!info){
          await fs.mkdirp(
            './public/images/'+`${shopId}/items/${mobilId}`
          )
          .then( async _=> {
            try {
              await fs.outputFile(
                './public/images/'+`${shopId}/items/${mobilId}/org.jpg`,
                base64DataOrg,
                {
                  encoding:'base64'
                }     
              )
              await fs.outputFile(
                './public/images/'+`${shopId}/items/${mobilId}/win.jpg`,
                base64DataWin,
                {
                  encoding:'base64'
                }
              )

              let newItem = new Item(item)
              await newItem.save()
              let result = await TypeItem.findById(type)
              result.count += 1
              await result.save()
              res.json()

            } catch (error) {
              res
                .status(400)
                .json( 'Error' + error )
            }  
          })
        }
      } catch (error) {
        res
          .status(400)
          .json( 'Error' + error )
      }
    });

  // router.route('/deleteAllItem')
  //   .post((req,res)=>{
  //     fs.remove('./public/images/5e83161f04be3f216807b021/items')
  //     .then(_=>{
  //           res.json('deletedall')
  //     })
  //     .catch(err=>{res.json(err)})
      

  //   })

  router.route('/delete/:id')//delete item in specific Shop
    .post( async (req,res,next)=>{

      let {
        Id,
        MobilImg,
        type
      } = req.body;

      try {

        await fs.remove(`./public/images/${req.params.id}/items/${MobilImg}`)
        await Item.findByIdAndDelete(Id)
        let result = await TypeItem.findById(type)
        if(result.count === 0){
          next()
        }else{
          result.count -=1
          await result.save() 
        }
        
        res.json()

      } catch (error) {
        res.json(error)
      }
        
    });
    
  router.route('/update/:id')//update item
    .post( async (req,res)=>{

      let {Name,Price,Description} = req.body

    try {

      let item = await Item.findById(req.params.id)
      item.Name = Name
      item.Price = Price
      item.Description = Description
      item.KeyItem = Name.trim().toLowerCase()
      await item.save()
      res.json()   

    } catch (error) {
      res.status(400).json("Error " + error)
    }
      
    });
   
  router.route('/promotions/:id')//for adding promoted items
    .post( async (req,res)=>{

      try {
        await Item
          .findByIdAndUpdate(
            { _id: req.params.id },
            { 
              promotion: req.body.bool,
              newPromotion:req.body.newPriceProm
            }
          )
        res.json()
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error)
      }

  });

  module.exports = router
