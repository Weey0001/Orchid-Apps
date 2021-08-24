import React, { createRef } from 'react'
import { 

  TouchableWithoutFeedback ,
  Text ,

} from 'react-native'
import * as Animatable from "react-native-animatable";
import ReactNativeModal from "react-native-modal";
import NetErrStyle from './netErrStyle/netErrStyle';

export const NetError = props => {

  let closeBtn = createRef ()

  let closeModal = _ => {
  
    closeBtn
      .current
      .bounceOut ( 500 )
      .then (
        
        end => {
        
          end.finished ?
            props.ToggleModal () 
            : null

        }
      
      )
  
  }

  return (
    
    <ReactNativeModal

      useNativeDriver = { true }
      visible = { props.isModal }
      animationIn = 'bounceIn'
      animationInTiming = { 500 }
      animationOut = "flipOutY"
      animationOutTiming = { 1000 }
      coverScreen = { true }
      style = { NetErrStyle.counainer }
      
    >

      <Animatable.Text 

        useNativeDriver = { true }
        style = { NetErrStyle.title }
        animation = 'bounceIn'

      >

        Oups !
      
      </Animatable.Text>

      <Animatable.Image

        useNativeDriver = { true }
        style = { NetErrStyle.img }
        source = { require ( './img/0.png' ) }
        animation = 'bounceIn'

      />

      <Animatable.Text 

        useNativeDriver = { true }      
        style = { NetErrStyle.messTxt }
        animation = 'bounceIn'

      >

        Une erreur est survenue lors de la connection
      
      </Animatable.Text>

      <Animatable.View

        useNativeDriver = { true }
        style = { NetErrStyle.countBtn }      
        ref = { closeBtn }
        animation = 'bounceIn'
        delay = { 500 }

      >
        <TouchableWithoutFeedback

          onPress = { _ => { closeModal () } }

        >
          
          <Text style = { NetErrStyle.txtBtn } >

            Close

          </Text>
        
        </TouchableWithoutFeedback>      
      </Animatable.View>

    </ReactNativeModal>
  )
}
