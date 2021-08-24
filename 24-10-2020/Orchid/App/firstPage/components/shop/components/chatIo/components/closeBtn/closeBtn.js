import React from "react";
import { 
  View,
  TouchableWithoutFeedback,
  Text
 } from "react-native";
import CloseBtnChatStyle from "./styles/StyleClose";

export default props => 
   <View style={CloseBtnChatStyle.countainer}>
     <TouchableWithoutFeedback 
       style={CloseBtnChatStyle.towf} 
       onPress={_=>props.ToggleChat()}
     >
       <Text style={CloseBtnChatStyle.txt}>
         X
       </Text>
     </TouchableWithoutFeedback>
     
   </View>