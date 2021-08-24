import React from "react";
import * as Animatable from "react-native-animatable";
import PromOnStyle from "./promOnStyle/promOnStyle";

const PromOn = props => 

  <Animatable.View

    useNativeDriver = { true }
    animation = 'bounceIn'
    duration = { 1000 }

  >

    <Animatable.Text 

      style = { PromOnStyle.txt }
      useNativeDriver = { true }
      animation = 'tada'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 2000 }

    >

      { props.itemData.Price } .ar

    </Animatable.Text>  

  </Animatable.View>

export default PromOn