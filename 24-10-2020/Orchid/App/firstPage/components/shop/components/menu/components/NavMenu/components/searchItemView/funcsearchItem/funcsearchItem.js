import axios from "axios";
import { Api } from "../../../../../../../../config/connections/connections";

export const searchitem = async props => {

  let data = {

    searchtxt: props.textItemSearch

  }

  if ( props.textItemSearch === "" )
  {

    await props.setFindedItem ( [] )

  } else { 

    try {

      let result = await axios.post (

        Api +
        "/items/searchTest" ,
        data

      )

      await props.setFindedItem ( result.data )
      
    } catch ( error ) {
      
      alert( error )

    }  

  }

}