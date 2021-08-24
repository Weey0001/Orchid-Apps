import React from "react";
import * as Animatable from "react-native-animatable";
import TitleStyle from "./titleStyle/titleStyle";
import { View , Text } from "react-native";

const Title = _ => 
 
  <Animatable.View

    useNativeDriver = { true }
    animation = "bounceIn"
    duration = { 800 }
    delay = { 500 }
  >
    <Animatable.View
      
      useNativeDriver = { true }
      animation = 'swing'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 3000 }
      style = { TitleStyle.subCount }
    
    >
    
      <View style = { TitleStyle.txtcount } >

        <Text style = { TitleStyle.txt1 } >
          Sign 
        </Text>

        <Text style = { TitleStyle.txt2 }>
          Up
        </Text>            

      </View>

    </Animatable.View>      
  
  </Animatable.View>

export default Title