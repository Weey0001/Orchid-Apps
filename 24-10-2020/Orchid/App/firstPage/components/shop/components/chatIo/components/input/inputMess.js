import React, {useRef } from "react";
import { 
    View,
    TextInput,
    Button
 } from "react-native";
import { InpMessStyle } from "./styles/styles";
import { sendMess } from "./funcS/socketSendMess";
import { compose } from "recompose";
import HocInpMess from "./hocInpMess/HocInpMess";
import SendBtn from "./sendBtn/sendBtn";

const {
    countainer,
    inp
} = InpMessStyle

const InpMess = props => {
    let refInpMess = useRef()
    return(
        <View style = {countainer}>
            <TextInput 
                placeholder="entre message" 
                placeholderTextColor='#30303080'
                ref={refInpMess}
                style={inp}
            /> 
            <SendBtn 
              onPress={_=>sendMess(props,refInpMess)}
              {...props}
            />

        </View>
  )
}


export default compose(
    HocInpMess
)(InpMess)