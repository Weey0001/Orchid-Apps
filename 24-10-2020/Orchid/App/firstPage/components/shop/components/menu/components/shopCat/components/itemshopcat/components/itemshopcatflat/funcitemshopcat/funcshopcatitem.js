import axios from "axios";
import { Api } from "../../../../../../../../../../config/connections/connections";

export let GetAllShopFromSpeCat = async props => {

  try {
    
    let result = await axios(

      Api + 
      "/shops/shopSpeCat/" +
      props.datacat._id

    )

    await props.setDataSpeCat( result.data )

  } catch (error) {
    
    alert( error )

  }
}