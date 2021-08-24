import React , { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native";

const BtnReg =  props =>{

  let countainer = useRef () ;

  let handleAnim = _ => {

    countainer
      .current
      .rubberBand ( 500 )
      .then ( 
        
        end => {

          if ( end.finished ){
        
            props.someFunction ()
        
          }
        
        }
      
      )
  }

  return (

    <Animatable.View
      
      useNativeDriver = { true }
      ref = { countainer }
      style = { { margin: 10 } }
      animation = "flipInY"
      duration = { 1000 }
      delay = { props.index * 100 + 600 }
    >
    
      <Button 
       
        color = { props.color } 
        title = { props.title }
        onPress = { _ => handleAnim () }

      />

    </Animatable.View>
  
  )

}

export default BtnReg