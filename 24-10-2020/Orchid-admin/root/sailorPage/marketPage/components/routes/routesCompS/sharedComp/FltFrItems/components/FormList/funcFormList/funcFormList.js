import axios from "axios";

export const GetBoolPorm = async props => 

  {

    let res = await axios ( 

      props.Api
      `/items/promSteItem/` +
      props.itemData._id

    )

    if ( res.data === "false" ) 
    
    {

      await props.Active ()

    } 
    
    else if ( res.data === "true" )
    
    {

      await props.Inactive ()
    }

    else {

      await props.Loading ()

    }


  }