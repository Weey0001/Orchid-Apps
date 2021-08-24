import React from "react";
import { View } from "react-native";
import PromOn from "./components/promOn/promOn";
import PromOff from "./components/promOff/promoff";
import PromPriceStyle from "./promPriceStyle/PromPriceStyle";

const PromPrice = props => 
  
  <View style = { PromPriceStyle.container } >

    {

      props.itemData.promotion ?
      <PromOn { ...props } />
      : <PromOff { ...props } />

    }

  </View>

export default PromPrice