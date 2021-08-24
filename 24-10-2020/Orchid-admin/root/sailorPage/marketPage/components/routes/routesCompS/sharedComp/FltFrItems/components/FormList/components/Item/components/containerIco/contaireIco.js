import React from "react";
import * as Animatable from "react-native";

import { 
  
  Animated ,
  TouchableWithoutFeedback ,
  View

} from "react-native";

import { 
  
  contIconAnimHeight , 
  contIconAnimBorder 

} from "../../../funcAnim/funcAnim";
import ContainerIcoStyle from "./containerIcoStyle/containerIcoStyle";

const ContainerIco = props => 
  
  <Animated.View
     
    style = {{

      height: contIconAnimHeight ,
      margin: contIconAnimBorder

    }}

  >

    <Animatable.View
      
      useNativeDriver = { true }
      animation = "bounceIn"
      duration = { 1000 }
      delay = { props.index * 100 }
      style = { ContainerIcoStyle.frstCont }
      ref = { containerRef }

    >

      <Animatable.View
        
        useNativeDriver = { true }
        animation = "pulse"
        duration = { 500 }
        delay = { index * 300 }
        iterationDelay = { 2000 }

      >

        <TouchableWithoutFeedback
        
          onPress = { _ => props.ListItemTouch ( containerRef ) }

        >

          <View>

            { props.children }

          </View>

        </TouchableWithoutFeedback>

      </Animatable.View>

    </Animatable.View>

  </Animated.View>

export default ContainerIco