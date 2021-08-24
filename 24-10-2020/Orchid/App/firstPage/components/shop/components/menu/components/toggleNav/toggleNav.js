import React from "react";
import { 
  TouchableWithoutFeedback,
  View,
  Image
 } from "react-native";
import ToggleMenuStyle from "./toggleMenuStyle/toggleMenuStyle";

let ToggleNavMenu = props => 
  <View style={ToggleMenuStyle.countainer}>
    <TouchableWithoutFeedback 
      style={ToggleMenuStyle.twf} 
      onPress={props.togglnavInt}
    >
      <Image source={require("./icon/iconToggleMenu.png")} style={ToggleMenuStyle.icn} />
    </TouchableWithoutFeedback>
  </View>
 
export default ToggleNavMenu