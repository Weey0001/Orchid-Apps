import React, { useRef } from "react";
import { 
  TouchableWithoutFeedback
  ,Text
 } from "react-native";
import SendBtnStyle from "./styles/styles";
import * as Animatable from "react-native-animatable";
import { animSendBtn } from "./styles/anim";

let {
  countainer,
  txt
} = SendBtnStyle;

const SendBtn = props => {

  let sendBtnRef = useRef()

  return( 
      <Animatable.View
        style={countainer}
        useNativeDriver={true}
        ref={sendBtnRef}
      >
        <TouchableWithoutFeedback 
          onPress={_=>{
            animSendBtn(sendBtnRef)
            props.onPress()
          }}
        >
          <Text style={txt}>
            send
          </Text>
        </TouchableWithoutFeedback>

      </Animatable.View>
    )
  }


export default SendBtn