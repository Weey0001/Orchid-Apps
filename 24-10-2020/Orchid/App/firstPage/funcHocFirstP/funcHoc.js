import { Api } from "../components/config/connections/connections"
import axios from "axios"

import { 

  documentDirectory ,
  writeAsStringAsync ,
  makeDirectoryAsync ,
  getInfoAsync ,
  deleteAsync,
  readDirectoryAsync,
  readAsStringAsync

} from "expo-file-system";

let pathdir = documentDirectory + "favoris/"
let path = pathdir + "fav.txt"
let pathitem = pathdir + "favItem.txt"

export let GetShopCat = async props => {

  try {

    let result = await axios(
      
      Api +
      "/shopcats/getallShopCat"
      
    )

    console.log( 
      
      "All Shop Cat : " , 
      result.data 
      
    )

    await props.setDataShopCat( result.data )

  } catch ( error ) {
     
    alert( error )

  }

}

export let CreateFavDir = async props => {

  try {

    let existFile = await getInfoAsync ( path )

    if ( !existFile.exists )
    {
      // await deleteInternalData ()
      await makeDirectoryAsync ( pathdir )
        .then ( 
          
          async _ => {

            await writeData ( path )      
            await writeData ( pathitem )          

          } 

        )
        .then ( 

          async _ => {

            await readInternalData ( props )

          }

        )

    } else {
 
      await readInternalData ( props )

    }

  } catch ( error ) {
    
    alert( error )

  }

}

let writeData = async pathtouse => {

  await writeAsStringAsync (
            
    pathtouse ,
    "[]" ,
    {

      encoding: 'utf8',

    }

  )  
  .then ( _ => console.log( `${pathtouse===path? "FavShop":"FavItem"}` ) )  

}

let deleteInternalData = async _ => {

  await deleteAsync ( pathdir )
    .then ( _ => console.log ( "deleted" ) )

}

let readInternalData = async props => {

  {
          
    let readFav = await readAsStringAsync ( 

      path ,
      { encoding: "utf8" }
      
    )

    let readFavItem = await readAsStringAsync (

      pathitem ,
      { encoding: "utf8" }

    )

    let parsedReadFav = JSON.parse ( readFav )
    let parsedReadFavItem = JSON.parse ( readFavItem )

    console.log ( 
      
      "type of favData" ,
      parsedReadFav.length 

    )

    console.log (

      "itemFav Number: " ,
      parsedReadFavItem.length

    )

    await props.setDataFav ( parsedReadFav )
    await props.setDataFavItem ( parsedReadFavItem )

  }

}