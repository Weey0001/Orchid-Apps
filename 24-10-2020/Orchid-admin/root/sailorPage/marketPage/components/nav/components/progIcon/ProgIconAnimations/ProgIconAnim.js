import * as Animatable from "react-native-animatable"

export const OnTouch = ( ref , props ) => 

  ref
    .current
    .rubberBand ( 500 )
    .then ( 
      
      _ => {

        if ( _.finished ) 
        {

          props.ToProgPage ()

        }   

      } 
    
    )

