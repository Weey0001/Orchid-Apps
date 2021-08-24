import * as Animatable from "react-native-animatable";

export const OnToolsTouch = ( ref , props ) => 

  ref
    .current
    .swing ( 500 )
    .then(
      _ => {

        if ( _.finished )
        {
          props.setsomeState()
        }

      }
    )