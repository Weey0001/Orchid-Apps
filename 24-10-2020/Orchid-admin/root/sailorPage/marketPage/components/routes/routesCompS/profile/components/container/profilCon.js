import React from "react";
import { View } from "react-native-animatable";
import { ScrollView } from "react-native";
import ProfilConStyle from "./conStyle/ProfilConStyle";

let ProfilContainer = props => 

  <View
  
    useNativeDriver = { true }
    animation = "bounceIn"
    style = { ProfilConStyle.cont }

  >

    <ScrollView
    
      style = { ProfilConStyle.scrVs}
      contentContainerStyle = { ProfilConStyle.scrVc }


    >

      { props.children }

    </ScrollView>

  </View>

export default ProfilContainer