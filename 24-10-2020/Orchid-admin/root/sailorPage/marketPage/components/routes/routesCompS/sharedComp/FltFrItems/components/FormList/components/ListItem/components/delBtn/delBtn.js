import React from "react";
import { View } from "react-native";
import BtnDel from "../../../Utilities/btnDelet/BtnDel";
import DelBtnStyle from "./delBtnStyle/delBtnStyle";

const DelBtn = props => 

  <View style = { DelBtnStyle.container } >

    <BtnDel { ...props } />

  </View>

export default DelBtn