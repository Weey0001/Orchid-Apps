import {

  documentDirectory ,
  readDirectoryAsync ,
  readAsStringAsync ,
  writeAsStringAsync ,
  makeDirectoryAsync ,

} from "expo-file-system";

let path = documentDirectory + "/favoris/fav.txt"

let pathitem = documentDirectory + "/favoris/favItem.txt"

export let addFavoris = async ( props , datatouse ) => {

  let newdataFav = [ ...props.dataFav , datatouse]
  
  let newData = JSON.stringify ( newdataFav )  
  
  try {
    
    await props.setDataFav ( newdataFav )

    await UpdateFile ( path , newData )
  
  } catch ( error ) {
    
    console.log( error )

  }

}

export let addFavorisItem = async ( props , datatouse) => {

  let newDataItem = [ ...props.dataFavItem , datatouse ]
  
  let newData = JSON.stringify ( newDataItem )
  
  try {
    
    await props.setDataFavItem ( newDataItem )

    await UpdateFile ( pathitem , newData )

  } catch ( error ) {
    
    alert ( error )

  }

}

export let rmvFav = async ( props , datatouse ) => {

  let newDataFav = props.dataFav.filter ( ele => ele !== datatouse )

  console.log ( newDataFav )

  let newData = JSON.stringify ( newDataFav )

  try {

    if ( props.findedShopFav !== [] ) 
    {

      let newDataFinded = props.findedShopFav.filter ( ele => 
        ele !== datatouse )

      await props.setFindedShopFav ( newDataFinded )
      
    }

    await props.setDataFav ( newDataFav )

    await UpdateFile ( path , newData )
    
  } catch ( error ) {
    
    alert ( error )

  }

}

export let rmvFavItem = async ( props , datatouse ) => {

  let newDataFavItem = props.dataFavItem.filter ( ele => ele !== datatouse )

  console.log ( newDataFavItem )

  let newData = JSON.stringify ( newDataFavItem )



  try {

    if ( props.findedFavItem !== [] ) 
    {

      let newDataFinded = props.findedFavItem.filter ( ele => 
        ele !== datatouse )

      await props.setFindedFavItem ( newDataFinded )

    }

    await props.setDataFavItem ( newDataFavItem )

    await UpdateFile ( pathitem , newData )
    
  } catch ( error ) {
    
    alert ( error )

  }

}

let UpdateFile = async ( somePath , newData ) => {

  try {
    
    await writeAsStringAsync (

      somePath ,
      newData ,
      {
        encoding: "utf8"
      }
    )
    .then ( _ => console.log ( "fileItem updated"))    

  } catch ( error ) {
    
    alert ( error )

  }

}