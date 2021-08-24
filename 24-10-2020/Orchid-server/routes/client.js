let express = require('express'),
router = express.Router(),
Client = require('./clientSchema')

router.route('/checkEmailExistence')
  .post( async (req,res)=>{

    let {email,phone} = req.body,
    emailVal = email.trim(),
    phoneVal = phone.trim()

    try {

      let result1 = await Client.find({ email: emailVal })
      let result2 = await Client.find({ phone: phoneVal })

      if(result1.length>0){
        res.json("emailE")
      }else if(result2.length>0){
        res.json('phoneE')
      }else{
        res.json('Not exist')
      }
    } catch (error) {
      res
        .status(400)
        .json( "Error: " + error )
    }

  })

router.route('/addClient')
  .post(async (req,res)=>{

    let newClient = new Client(req.body)
    await newClient.save()
    let result = await Client.find({email: req.body.email})
    let id = result[0]._id
    res.json(id)
    console.log('New Client')
  })
  
router.route('/login')
  .post(async (req,res)=> {
    
    let {
      email,
      pass
    } = req.body

    let result = await Client.find({email: email, pass: pass})
    if(result.length<1){
      res.json('notfound')
    }else if(result.length>0){
      let data = {
        pseudo: result[0].pseudo,
        email: result[0].email,
        id: result[0]._id,
        phone: result[0].phone
      }

      res.json(data)
    } 

  })

router.route("/allClient")
  .get( async (req,res)=>{
    let result = await Client.find()
    res.json(result)  
  })


module.exports = router;