import React from "react";
import { compose } from "recompose";
import SocialIcon from "./components/socialIcon/socialIcon"
import ButtonsStyle from "./ButtonsStyle/ButtonsStyle"
import HocBtn from "./HocBtn/HocBtn"

const Buttons = _ => 

  <View style = { ButtonsStyle.container } >

    <SocialIcon

      source = { require ( '../img/0.png' ) }
      animation = 'wobble'
      duration = { 4000 }
      someAction = { props.SendMail }

    />

    <SocialIcon

      source = { require ( '../img/1.png' ) }
      animation = 'rubberBand'
      duration = { 3000 }
      someAction = { props.PhoneCall }

    />
    
  </View>

export default compose ( HocBtn ) ( Buttons )