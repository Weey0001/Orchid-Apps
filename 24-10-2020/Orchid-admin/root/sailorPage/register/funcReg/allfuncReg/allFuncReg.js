import axios from "axios";
import { 

  writeAsStringAsync ,
  documentDirectory ,
  makeDirectoryAsync ,
  deleteAsync,
  getInfoAsync

} from "expo-file-system";

const tomponEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const pathDir = documentDirectory + "/UserFile"
const pathws = pathDir + "/userFile.txt"

export const SuccesLog = props => {

  let testEmail = tomponEmail.test ( props.email.trim () )

  let testPass = props.pass.length < 100 ? true : false

  let ArrData = [

    testEmail ,
    testPass 

  ]

  let testArrData = ArrData.some ( ele => ele === true )

  testArrData ? 
    checkforLog ( props )
    : props.FailedTest ( "Certain criteres n'ont pas ete respecter")
    
}

let checkforLog = async props => {

  let path = props.Api + "/users/login"
  let item = {
      
    email: props.email.trim () ,
    pass: props.pass.trim ()
  
  }

  let result = await axios.post ( path , item )

  if ( result.data == "false" )
  {
    alert ( "Email ou mot de pass invalide" )
  } else {

    await props.setShopInfo ( result.data [ 0 ] )

    // await createUserFile ( props )
    
  }

}



export const SuccesSign = props => {
  
  let testEmail = tomponEmail.test( props.email.trim () );

  let testPseudo = props.pseudo.length < 50 ? true : false 

  let testFirstName = props.firstName.length < 50 ? true : false 

  let testLastName = props.lastName.length < 50 ? true : false

  let testPhone = props.phone.length === 10 ? true : false 

  let testPass = props.pass.length < 100 ? true : false

  let ArrData = [

    testEmail ,
    testPhone ,
    testPseudo ,
    testLastName ,
    testPass ,
    testFirstName

  ]

  let testArrData = ArrData.some ( ele => ele === true )

  testArrData ? 
    checkemailexistence ( props )
    : props.FailedTest ( "Certain criteres n'ont pas ete respecter")

}

let checkemailexistence = async props => {

  let path = props.Api +
  '/users/checkEmailExistence'
     
  try {

    let item = {
      
      email: props.email.trim ()
    
    }
    
    let result = await 

      axios
        .post ( 
           
          path ,
          item
        
        )

    result.data == "Exist" ?
      emailExist ( props )
      : createShop ( props )
      
  } catch ( error ) {

    alert( error )
  
  }

}

let emailExist = async props => {

  alert("Email deja utilise")
  // setLogIn(true)

}

let createShop = async props => {

  let path = props.Api +'/shops/addShop'

  let path0 = props.Api + '/users/add'

  let item = {

    email: props.email.trim () ,
    pseudo: props.pseudo.trim () ,
    phone: props.phone.trim () ,
    ShopCat: props.choosedCat.trim ()
  
  }

  let userProfil = {

    pseudo: props.pseudo.trim () ,
    firstName: props.firstName.trim () ,
    lastName: props.lastName.trim () ,
    email: props.email.trim () ,
    phone: props.phone.trim () ,
    pass: props.pass.trim () ,
    ShopCat: props.choosedCat.trim ()

  }

  try {

    let result = await axios.post ( path , item )

    userProfil.shopId = result.data

    let result0 = await axios.post( path0 , userProfil )

    if ( result0.data == "done" )
    {

      await props.setShopInfo ( userProfil )
      // await createUserFile ( props )

    
    } 
    
  } catch ( error ) {

    alert ( error )
    
  }

}

export const createUserFile = async props => {

  // console.log ( props.shopInfo )

  try {

    let checkLocalUserFile = await getInfoAsync ( pathDir )

    if ( checkLocalUserFile.isDirectory ) {

      await wsUserFile ()
      await props.ToWaitScreen ()

    } else {

      await makeDirectoryAsync ( pathDir ).then ( async _ => {

          await wsUserFile ( props )
          await props.ToWaitScreen ()
        
        }

      )

    }

  } catch ( error ) {
    
    alert ( error )

  }

}

let wsUserFile = async props => {

  // console.log ( "file created" )
  
  await writeAsStringAsync ( 

    pathws ,
    JSON.stringify ( props.shopInfo ) ,
    {
      encoding: 'utf8'
    }

  )

}

export const Failed = txt => {

  alert ( txt )

}

export const ForgotPassWord = async props => {

  let path = props.Api + '/users/passSend'

  let item = {

    email: props.email.trim () 

  }

  let testEmail = tomponEmail.test ( props.email )

  if ( testEmail )
  {

    try {

      let result = await axios.post ( path , item )

      alert ( JSON.stringify ( result.data ) )

    } catch ( error ) {

      alert ( "Erreur de connection" )
      
    }

  } else {

    alert ( "Email invalide" )

  }
}