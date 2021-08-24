import axios from "axios";
import { Api } from "../../../../../../../config/connections/connections";


export let GetItemFromSpeShop = async props => {

  console.log ( props.dataItem)

  try {

    let result = await axios ( 
      
      Api +
      '/items/allshopItem/' +
      props.dataItem._id

    )    

    await props.setDataItemShopList ( result.data )
    
  } catch ( error ) {
    
    alert ( error )
  }

}