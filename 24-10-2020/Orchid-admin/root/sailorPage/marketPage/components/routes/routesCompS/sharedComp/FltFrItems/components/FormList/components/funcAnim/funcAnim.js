import { 
  
  Animated ,
  Dimensions

} from "react-native";

import axios from "axios"
import { GetBoolPorm } from "../../funcFormList/funcFormList";

const { width } = Dimensions.get ( "screen" )
let {

  parallel ,
  timing ,
  Value

} = Animated

export const contAnimHeight = new Value ( width / 3 * 2 +20 )

export const contIconAnimHeight = new Value ( width / 3 )
export const contAnimBorder = new Value ( 20 )

export const contIconAnimBorder = new Value ( 5 )


export const Delete = async ( props ) => {

  let item = {
    
    Id: props.itemData._id.trim () ,
    MobilImg: props.itemData.MobilImg.trim () ,
    type: props.itemData.TypeItem.trim ()
    
  }

  try {

    let res = await axios.post (

      props.Api +
      "/items/delete/" +
      props.shopInfo.shopId ,
      item

    )  

    if ( res.status === 200 ) 
    
    {

      let newarray = props.items.filter( ele => ele !== props.itemData )

      keySelector === "list" ?
        await AnimDelete ()
        : await AnimDeleteIcon ()
      
      await props.setItems ( newarray )
    }
    
  } catch ( error ) {

    alert ( error )
    
  }

}

const AnimDelete = async _ => {
    
  parallel([

    timing (

      contAnimHeight ,
      {
        toValue: 0 ,
        duration: 500
      }
    
    ) ,

    timing (

      contAnimBorder ,
      {
        toValue: 0 ,
        duration: 500
      }
    
    )

  ]).start ( _ => { return true } )

}

let AnimDeleteIcon = async _ =>{

  parallel ([

    timing (

      contIconAnimHeight ,
      {
        toValue: 0 ,
        duration: 500
      }

    ) ,

    timing (

      contIconAnimBorder ,
      {
        toValue:0,
        duration:500
      }

    )

  ]).start ( _ => { return true } )

}

export const ListItemTouch = async ( props , ref ) => 

  {
  
    let end = await ref
      .current
      .rubbreBand ( 500 )
      
    if ( end.finished )

    {
 
      await props.ToShowItem ()

    }
    
  }

export const PromToggle = async ( props , bool ) => 
  {

    let item = { 

      bool: bool

    }

    await props.Loading ()

    try {

      let response = await axios.post ( 

          props.Api +
          "/items/promotions/" +
          props.itemData._id ,
          item
        
        )

      if ( response.status === 200 )
      
      {

        await props.GetBoolPorm ( props )

      }

    } catch ( error ) {
      
      alert(error)
    }
  }