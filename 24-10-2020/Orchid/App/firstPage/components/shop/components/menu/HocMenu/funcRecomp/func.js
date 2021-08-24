import axios from 'axios'
import { Api } from '../../../../../config/connections/connections'

export let GetDataCat = async ( props , catData ) => {

  try {


    let result = await axios( 
      
      Api + 
      "/shops/shopSpeCat/" +
      catData._id 
      
    )

    await props.setDataCat( result.data )
    await props.ToShopView()    

  } catch (error) {

    alert(error)

  }

}

export let GetShopTypes = async ( props , shopdata ) => {

  let result = await axios.get( 
    
    Api + 
    '/types/shops/' + 
    `${ shopdata._id }`
  
  ) 

  console.log( 
    
    "Shop Types : " , 
    result.data
    
  )
  
  await props.setDataShop( result.data )
  await props.ToTypeView()

}

export let GetTypesItems = async ( props , typesdata ) => {

  let result = await axios.get( 

    Api +
    '/items/foundItemSpeType/' +
    `${ typesdata._id }` 
  
  )

  console.log( 

    "Type Items : " , 
    result.data 

  )

  await props.setDatafromType ( result.data )
  await props.ToItemView ()

}

export let DeployItem = async ( props , itemData ) => {

  await props.setDataDeployer ( itemData )
  await props.ToItemDeployer ()

}

export let DeployerShop = async ( props , itemShop ) => {

  await props.setDataDeployerShop ( itemShop )
  await props.ToDeployerShop ()

}
