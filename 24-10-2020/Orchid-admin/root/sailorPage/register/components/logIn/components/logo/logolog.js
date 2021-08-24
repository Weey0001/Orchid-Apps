import React from "react" 
import LogoLogStyle from "./logoLogStyle/logoLogStyle"
import { View } from "react-native";
import * as Animatable from "react-native-animatable";

const LogoLog = _ => 

  <View style = { LogoLogStyle.countainer }>

    <Animatable.View

      useNativeDriver = { true }
      animation = 'bounceIn'
      duration = { 800 }
      delay = { 200 }
      style = { LogoLogStyle.img1Count }

    >

      <Animatable.Image

        useNativeDriver = { true }
        source = { require ( '../../img/11.png' ) }
        style = { LogoLogStyle.img1 }
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
        source = { require ( '../../img/10.png' ) }
        style = { LogoLogStyle.img2 }
        animation = 'wobble'
        duration = { 10000 }
        iterationCount = 'infinite'
        easing = 'linear'

      />        

    </Animatable.View>

  </View>

export default LogoLog