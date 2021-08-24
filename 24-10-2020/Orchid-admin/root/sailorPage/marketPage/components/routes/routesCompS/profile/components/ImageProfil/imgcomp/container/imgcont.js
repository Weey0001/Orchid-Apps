import React from "react";
import { View } from "reat-native";
import ImgContStyle from "./imgContStyle/imgcontStyle";

let ImgCont = _ => 

  <View style = { ImgContStyle.cont } >

    { _.children }

  </View>

export default ImgCont