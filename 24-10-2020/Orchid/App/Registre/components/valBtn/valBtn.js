import React from "react";
import { 
  TouchableWithoutFeedback,
  View,
  Text
 } from "react-native";
import BtnStyle from "./styles/btnstyles";

const ValBtn = ({newClient}) => 
   <View style={BtnStyle.countainer}>
    <TouchableWithoutFeedback 
      style={BtnStyle.towf} 
      onPress={newClient}
      >
      <Text style={BtnStyle.txt}>
        Valider
      </Text>
    </TouchableWithoutFeedback>     
   </View>

export default ValBtn