import axios from "axios";
import { Api } from "../../../../../../../../config/connections/connections";

export let searchShop = async props => {

  let postItem = {
     
    pseudo: props.textSearchShop

  }

  if ( props.textSearchShop === "" )
  {

    await props.setFindedShop ( [] )

  } else {

    try {
      
      let result = await axios.post ( 
        
        Api + 
        "/shops/shoptofind" , 
        postItem
    
      )

      await props.setFindedShop ( result.data )

    } catch ( error ) {
      
      alert( error )

    }   

  }

}