let express = require("express"),
  router = express.Router(),
  User = require('./userSchema'),
  Shop = require('./shopSchema'),
  nodemailer = require('nodemailer'),
  fs= require("fs-extra");
 
  router.route('/')
    .get( async (req,res)=>{

      try {
        
        let result = await User.find()
        res.json(result)
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }
      
    })

  router.route('/unique/:id')
    .post( async (req,res)=>{

      try {
        let result = await User.findById(req.params.id)
        res.json(result)
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }
      
    })
  
  
  router.route('/socials/:id')
    .post( async (req,res)=>{

      try {

        let user = await User.findById(req.params.id),
        liked = user.liked,
        addFavoris = user.addFavoris,
        followers= user.followers,
        social = {
          liked,
          addFavoris,
          followers,
        }
        res.json(social)

      } catch (error) {
        res.json( "Error: " + error)
      }
    })
   
  router.route('/checkEmailExistence')
    .post( async (req,res)=>{

      let {email} = req.body,
      emailVal = email.trim()

      try {
        let result = await User.find({ email: emailVal })
        if(result.length>0){
          res.json("Exist")
        }else{
          res.json('Not exist')
        }
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }

    })

  router.route('/add')
    .post( async (req,res)=>{
  
      const newUser = new User(req.body)

      try {
        await newUser.save()
        res.json('done')
      } catch (error) {
        res
          .status(400)
          .json( "Error" + error)
      }

    })

  router.route('/addImageProfil')
    .post( async (req,res)=>{

      let {
        shopId,
        orgbase64,
        winbase64,
        category,
        idProfilImg
      } = req.body

      let addData = async () => {

        try {
          let pathOrg = './public/images/'+`${shopId}/${category}/${idProfilImg}org.jpg`

          fs.outputFile( pathOrg,orgbase64,{encoding:'base64'})
          if(category==="users"){
            let pathWin = './public/images/'+`${shopId}/${category}/${idProfilImg}win.jpg`
            await fs.outputFile(pathWin,winbase64,{encoding:'base64'})
          }     
          res.json()        
        } catch (error) {
          res
            .status(404)
            .json( "Error: " + error)

        }
      }

      try {
        let result = await Shop.findById(shopId)
        if(category==="users"){
          result.imgP = idProfilImg
        }else if(category==="cover"){
          result.imgC = idProfilImg
        }       
        await result.save()
        
        let pathDir = './public/images/'+`${shopId}/${category}`
        let info = await fs.pathExists(pathDir)
        
        if(!info){
          
          fs.mkdirp(pathDir)
          addData()
                  
        }else{
          await fs.emptyDir('./public/images/'+`${shopId}/${category}`)
          addData()
        }
        
      } catch (error) {
        res
          .status(404)
          .json( "Error" + error )
      }
    })
    
  router.route('/login')
    .post( async (req,res)=>{

      let {email,pass} = req.body,
      emailVal= email.trim(),
      passVal = pass.trim()
      let options = {
        email: emailVal , 
        pass: passVal
      }

      try {

        let result = await User.find(options)
        if(result.length>0){
          res.json(result)
        }else{
          res.json("false")
        }

      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }
        
    })

  router.route('/config/synchronisationwithAppData')
    .post( async (req,res)=> {
      let {
        _id,
        firstName,
        lastName,
        email,
        phone,
        pass,
        shopId,
        createdAt,
        pseudo
      } = req.body

      let options = { 
        _id:_id,
        firstName: firstName, 
        lastName:lastName,
        email:email,
        phone:phone,
        pass:pass,
        shopId:shopId,
        createdAt:createdAt,
        pseudo:pseudo
      }

      try {

        let result = await User.find(options)
        let response = result.length === 1 ? "succes" : "failed"
        res.json(response)

      } catch (error) {
        res
          .status(400)
          .json( "Error" + error )
      }

    })
  
  router.route('/passSend')
    .post( async (req,res)=>{
      let {email} = req.body;
      
      let options ={
        service: 'gmail',
        auth: {
          user: 'weedy1aina@gmail.com',
          pass: 'bockwrqspfrrcqhf'
        }
      }
      let mailOptions = {
        from: 'weedy1aina@gmail.com',
        to: `${result.email}`,
        subject: `"Your password OrchidS"`,
        text: `Your password: ${result.pass}`
      }

      try {

        let result = await User.findOne({email:email})
        if(result!==null) sendMail()
        else res.status(400).json( "Error: " + new Error("Email introuvable"))

      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }

      let sendMail = () => {

        var transporter = nodemailer.createTransport(options);
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            res.json(error)
          } else {
            res.json("Votre mot de pass a ete envoyer dans votre inBox")
          }
        });
      }

    })
     
  router.route('/:id')
    .delete( async (req,res)=>{

      try {
        await User.findByIdAndDelete(req.params.id)
      } catch (error) {
        res
          .status(400)
          .json( "Error: " + error )
      }
      
    })
     
  router.route('/update')
    .post( async (req,res)=>{

      try {
        let result = await User.findById(req.body.id)
          result.firstName = req.body.firstName
          result.lastName = req.body.lastName
          result.email = req.body.email
          result.phone = req.body.phone
        
        await result.save()
        res.json("User Updated")
      } catch (error) {
        res.json( "Error: " + error )
      }
      
    })
   
module.exports = router;