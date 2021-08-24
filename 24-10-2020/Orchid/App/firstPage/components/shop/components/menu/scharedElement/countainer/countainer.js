import React, { Children } from "react";
// import { 

//   View 

//  } from "react-native-animatable";
import StyleCountainer from "./stylecountainer/stylecountainer";
import { View } from "react-native";

let Countainer = ( { children } ) =>

  <View

    style = { StyleCountainer.countainer }

  >

    { children }

  </View>

export default Countainer