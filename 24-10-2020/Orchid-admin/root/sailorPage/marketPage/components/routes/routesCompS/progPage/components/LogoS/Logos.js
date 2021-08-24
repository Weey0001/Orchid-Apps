import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import LogosStyle from "./LogosStyle/LogosStyle";

const Logos = _ => 

  <View style = { LogosStyle.countainer } >
    
    <Animatable.Image

      useNativeDriver = { true }
      source = { require( '../img/11.png' ) }
      style = { LogosStyle.img1 }
      animation = 'pulse'
      duration = { 10000 }
      iterationCount = 'infinite'

    />  
    <Animatable.Image

      useNativeDriver = { true }
      source ={ require ( '../img/10.png' ) }
      style = { LogosStyle.img2 }
      animation = 'swing'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 4000 }

    />     
    
  </View>

export default Logos