import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import LogoStyle from "./logoStyle/logoStyle";

const Logo = _ => 
  
  <View style = { LogoStyle.countainer }>

    <Animatable.View
    
      useNativeDriver = { true }
      animation = 'bounceIn'
      duration = { 800 }
      delay = { 200 }
      style = { LogoStyle.countImg1 }

    >

      <Animatable.Image
      
        useNativeDriver = { true }
        source = { require ( '../../img/11.png' ) }
        style = { LogoStyle.img1 }
        animation = 'pulse'
        duration = { 500 }
        iterationCount = 'infinite'
        iterationDelay = { 2000 }

      />

    </Animatable.View>

    <Animatable.View
      
      useNativeDriver = { true }
      animation = 'bounceIn'
      duration = { 800 }
      delay = { 300 }
    
    >
    
      <Animatable.Image
   
        useNativeDriver = { true }
        source = { require ( "../../img/10.png" ) }
        style = { LogoStyle.img2 }
        animation = 'wobble'
        duration = { 10000 }
        iterationCount = 'infinite'
        easing = 'linear'

      />        
    </Animatable.View>

  </View>

export default Logo