import React from "react";
import * as Animatable from "react-native-animatable";
import LoadTxtStyle from "./loadTxtStyle/loadTxtStyle";

const BotText = _ =>
  
  <Animatable.View
  
    useNativeDriver = { true }
    style = { LoadTxtStyle.chargCountainer }
    delay = { 1000 }
    duration = { 1000 }
    animation = 'flipInX'
  
  >
  
    <Animatable.Text

      useNativeDriver = { true }
      style = { LoadTxtStyle.charg }
      animation = 'pulse'
      duration = { 1100 }
      iterationCount = 'infinite'
    >
      Chargement
    </Animatable.Text>
    
    <Dot index = { 0 } />
    <Dot index = { 1 } />
    <Dot index = { 2 } />
  
  </Animatable.View>

const Dot = ( { index } ) =>

  <Animatable.Text

    useNativeDriver = { true }
    duration = { 1000 }
    animation = "bounceIn"
    iterationCount = 'infinite'
    iterationDelay = { 100 }
    delay = { index * 200 }
    style = { LoadTxtStyle.charg }
  
  >
    .
  </Animatable.Text>

export default BotText