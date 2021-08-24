import axios from "axios";

import { 

  documentDirectory ,
  readAsStringAsync ,


 } from "expo-file-system";

 const path = documentDirectory + "/UserFile/userFile.txt"

export const loadShopData = async props => {

  let userData = await checkFileUser ()
  await AllData ( props ,
    userData )

}

const checkFileUser = async _ => {

  try {
    
    let userData = await readAsStringAsync (

      path ,
      {
        encoding: 'utf8'
      }
      
    )

    return JSON.parse( userData )
    
  } catch ( error ) {
    return error
  }

}

const AllData = async ( props , data ) => {

  try {

    await axios.all ([

      axios.get ( props.Api + "/items/allitems/" + data.shopId ) ,
      axios.get ( props.Api + "/types/shops/" + data.shopId )

    ]).then ( 

      axios.spread ( 
      
        async ( Items , Types ) => {

          await props.setItems ( Items.data )

          await props.setTypes ( Types.data )

          await props.ToMarket ()

        }
      )
    )
    
  } catch ( error ) {
 
    return error

  }
}