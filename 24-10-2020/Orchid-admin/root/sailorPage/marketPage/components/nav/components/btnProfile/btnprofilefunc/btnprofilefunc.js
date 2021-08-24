import * as Animatable from "react-native-animatable"

export const BtnProfOnTouch = ( ref , props) => 
  
  profilRef
    .current
    .rubberBand ( 500 )
    .then ( 
    
      end => {
      
        if ( end.finished )
        {
          props.ToProfile ()
        }
    
      }
    )

  