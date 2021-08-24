import React from "react"
import { compose } from "recompose";
import { 
  View,
  Text
 } from "react-native";
import styles from "./styles/stylesReg";
import hocReg from "./HocReg/hocReg";
import Inpfields from "./components/inpfields/inpfields";
import {TitleReg} from "./components/title/title";
import ValBtn from "./components/valBtn/valBtn";

const Reg = props => 
  <View style={styles.countainer}>
    <TitleReg />
    <Inpfields {...props}/>
    <ValBtn {...props}/>
  </View>

  export default compose(
    hocReg
  )(Reg)