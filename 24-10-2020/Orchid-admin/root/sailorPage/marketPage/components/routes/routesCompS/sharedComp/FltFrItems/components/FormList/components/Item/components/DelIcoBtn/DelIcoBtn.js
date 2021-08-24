import React from "react";
import { View } from "react-native";
import BtnDel from "../../../Utilities/btnDelet/BtnDel";
import DelIcoBtnStyle from "./DelIcoBtnStyle/DelIboBtnStyle";

const DelIcoBtn = props => 

  <View style = { DelIcoBtnStyle.cont } >

    <BtnDel { ...props } />

  </View>

export default DelIcoBtn