import React from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import ViewCompStyle from "./viewCompStyle/viewCompStyle";

const ViewComp = props => 

  <View style = { ViewCompStyle.cont } >

    <Animatable.Image
    
      useNativeDriver = { true }
      source = { require ( ) }
      style = { ViewCompStyle.img }
    
    />

      <View style = { ViewCompStyle.conttxt } >  

        <Text style = { ViewCompStyle.txt } >

          { props.itemData.view }

        </Text>

      </View>

  </View>

export default ViewComp