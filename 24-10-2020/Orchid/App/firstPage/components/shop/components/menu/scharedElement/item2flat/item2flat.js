import React from "react";
import { View } from "react-native-animatable";
import { Easing } from "react-native";

let Item2Flat = ( { children , index } ) => 
  
  <View
  
    useNativeDriver = { true }
    animation = 'bounceIn'
    delay = { 400 + index * 200}

  >
    <View 
      
      useNativeDriver = { true }
      animation = 'pulse'
      iterationCount = 'infinite'
      duration = { 400 }
      iterationDelay = { 3000 }
      delay = { 200 + index * 200 }

    >

      { children }   

    </View>
    
  </View>

export default Item2Flat