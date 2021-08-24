import React from "react";
import { View } from "react-native-animatable";
import HeaderItemStyle from "./HeaderItemStyle/HeaderItemStyle";

let HeaderItem = ( { children , index } ) =>

  <View 
  
    style = { HeaderItemStyle.countainer } 
    animation = "flipInX" 
    delay = { index === 0 ? 400 : index * 800 }
    duration = { 400 }

  >

    { children }
    
  </View>

export default HeaderItem