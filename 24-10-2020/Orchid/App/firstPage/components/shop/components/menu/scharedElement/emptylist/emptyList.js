import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import EmptyListStyle from "./emptyLiistStyle/emptyListStyle";

let EmptyList = _ => 

  <Animatable.View 
    
    useNativeDriver = { true }
    animation = "bounceIn"
    duration  = { 1000 }
    style = { EmptyListStyle.countainer } >

    <View style = { EmptyListStyle.secCount }>

      <Animatable.Text
        
        useNativeDriver = { true }
        animation = "pulse"
        iterationCount = "infinite"
        style = { EmptyListStyle.txt }
      >
        
        { " [ Loading ... ] "}

      </Animatable.Text>  
          
    </View>

  </Animatable.View>

export default EmptyList