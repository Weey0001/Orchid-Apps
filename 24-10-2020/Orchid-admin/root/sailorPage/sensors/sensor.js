import React from 'react';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';
import BackStyle from './backStyle/backStyle';

const Background3D = props =>

  <View style = { BackStyle.countainer } >

    <Animatable.Image

      useNativeDriver = { true }
      source = { require ( './img/3.jpg' ) }
      style = { BackStyle.img1 }

    />
    <Animatable.Image

      useNativeDrive = { true }
      source = { require ( "./img/8.png" ) }
      style = { BackStyle.img2 }

    />

    <View style = { BackStyle.childCount } >

      { props.children }

    </View>
      
  </View>

export default Background3D