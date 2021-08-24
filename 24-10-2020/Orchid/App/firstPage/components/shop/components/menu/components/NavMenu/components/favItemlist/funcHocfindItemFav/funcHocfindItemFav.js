export let findItemFav = async ( props , txttosearch ) => {
  
  try {

    await managedata ( props , txttosearch )
     
    await props.setSearchTextItemFav ( txttosearch )
    
  } catch ( error ) {
    
    alert ( error )

  }
}

let managedata = async ( props , txt ) => {

  try {

    if ( txt === "" )
    {
  
      await props.setFindedFavItem ( [] )
  
    } else {

      let patern = new RegExp ( txt , "i")

      let itemFinded = props.dataFavItem.filter ( ele => patern.test ( ele._id ) )

      console.log ( itemFinded )
  
      await props.setFindedFavItem ( itemFinded )
  
    }
    
  } catch ( error ) {
    
    alert ( error )

  }

}