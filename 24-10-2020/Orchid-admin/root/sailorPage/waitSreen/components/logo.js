import React from 'react';
import * as Animatable from "react-native-animatable"
import LogoStyle from './stylecomp/logoStyle';

export const Logo = _ => 

  <Animatable.View

    animation = 'bounceIn'
    duration = { 1000 }
    useNativeDriver = { true }

  >
    <Animatable.View
    
      useNativeDriver = { true }
      animation = "rotate"
      easing = "linear"
      iterationCount = "infinite"
      duration = { 10000 }

    >

      <Animatable.Image

        useNativeDriver = { true }        
        style = { LogoStyle.img }        
        source = { require ( "./img/11.png" ) }

        animation = "pulse"
        duration = { 500 }
        iterationCount = "infinite"
        iterationDelay = { 1000 }

      />        

    </Animatable.View>

  </Animatable.View>