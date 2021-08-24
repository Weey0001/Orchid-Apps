import React, { forwardRef } from 'react'
import { TextInput } from 'react-native'
import * as Animatable from 'react-native-animatable'
import InpCompStyle from './inpCompStyle/impCompStyle'

export const InputComp = forwardRef ( 

  ( props , ref ) =>

  <Animatable.View 

    style = { InpCompStyle.countainer }
    useNativeDriver = { true }
    duration = { 800 }
    animation = 'flipInY'
    delay = { props.index * 100 + 500 }

  >
    <Animatable.View

      useNativeDriver = { true }
      iterationDelay = { 2000 }
      duration = { 500 }
      animation = 'pulse'
      iterationCount = 'infinite'

    >
      
      <TextInput
        
        ref = { ref }
        value = { props.value }
        onChangeText = {

          txt => props.onChangeText ( txt )

        }

        placeholder = { props.placeHolder }
        style = { InpCompStyle.inp }
        
        onSubmitEditing = { 
          
          _ => props.onSubmitEditing ()
        
        }

        keyboardType = { props.np ? "phone-pad" : "default" }
      
      />      

    </Animatable.View>
    
  </Animatable.View>
  
)


