import React from "react";
import { View } from "react-native";

let ContImgIntComps = props => 

  <View style = { ...props.stylecont }>

    <View style = { ...props.stylesubcont }>

      { props.children }

    </View>

  </View>

export default ContImgIntComps