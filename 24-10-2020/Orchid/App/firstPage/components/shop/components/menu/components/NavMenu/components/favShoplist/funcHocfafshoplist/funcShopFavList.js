export let findShopFav = async ( props , txt ) => {

  try {

    await manageShopData ( props , txt )

    await props.setSearchTextShopFav ( txt )
    
  } catch ( error ) {
    
    alert ( error )

  }
}

let manageShopData = async ( props , txt ) => {

  try {

    if ( txt === "")
    {
      await props.setFindedShopFav ( [] )

    } else {

      let patern = new RegExp ( txt , "i" )

      let shopfinded = props.dataFav.filter ( ele => patern.test ( ele._id ) )

      console.log ( shopfinded )

      await props.setFindedShopFav ( shopfinded )

    }
    
  } catch ( error ) {
    
    alert ( error )

  }
}