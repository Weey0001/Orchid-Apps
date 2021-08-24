import React from "react";
import { 
  View,
  Text
 } from "react-native";
 import { ChatTxtStyle } from "./styles/styles";


 const ChatTxt = props => 
   <View style={ ChatTxtStyle.countainer}>
     {
       props.msg
       &&
       props.msg.map(
         ele =>
          <Text
            key={ele} 
            style={{color:'white'}}>
            {ele}
          </Text>
       )
       
     }
   </View>


  export default ChatTxt