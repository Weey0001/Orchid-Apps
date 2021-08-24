import React , { useRef } from "react";
import { Image } from "react-native";
import BtnDeletStyle from "./btnDeletStyle/btnDeletStyle";

const BtnDel = props => 

  <Animatable.View

    animation = 'bounceIn'
    delay = { 500 }
    useNativeDriver = { true }

  >
    <TouchableWithoutFeedback 
      onPress = { _ => props.Delete ( props ) }
    >
      <Image

        source = { require ( "../img/x.png" ) }
        style = { BtnDeletStyle.img }

      />
    </TouchableWithoutFeedback>
  </Animatable.View>

export default BtnDel