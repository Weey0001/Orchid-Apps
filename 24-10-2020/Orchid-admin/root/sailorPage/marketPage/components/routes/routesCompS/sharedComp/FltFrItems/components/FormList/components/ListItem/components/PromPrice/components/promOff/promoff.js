import React from "react";
import * as Animatable from "react-native-animatable";
import PromOffStyle from "./promoffStyle/promOffStyle";

const PromOff = props => 

  <Animatable.Text 
  
    useNativeDriver = { true } 
    style = { PromOffStyle.txt }
    animation = 'bounceIn'
    duration = { 1000 }

  >
    { props.itemData.Price } .ar

  </Animatable.Text>

export default PromOff