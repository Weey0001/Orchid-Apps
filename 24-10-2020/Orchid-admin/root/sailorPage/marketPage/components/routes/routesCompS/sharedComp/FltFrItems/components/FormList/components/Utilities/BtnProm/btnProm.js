import React from "react";
import { TouchableWithoutFeedback , ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import Active from "./component/active/active";
import Inactive from "./component/inactive/inactive";
import HocBtnProm from "./HocBtnProm/HocBtnProm";

const BtnProm = props => 

  <Animatable.View

    animation = 'bounceIn'
    delay = { 500 }
    useNativeDriver = { true }

  >
    <TouchableWithoutFeedback 
      onPress = { _ => props.PromToggle ( props )}
    >
      
      <View>
        
        {

          props.actionProm === "active" 
          ? <Active />
          : props.actionProm === "inactive" 
          ? <Inactive />
          : props.actionProm === "Loading" 
          ? <ActivityIndicator />
          : null

        }
        

      </View>

    </TouchableWithoutFeedback>
  </Animatable.View> 

export default compose ( HocBtnProm )( BtnProm )