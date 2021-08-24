import React from "react";
import * as Animatable from "react-native-animatable";
import { ScrollView } from "react-native";
import Logos from "./components/LogoS/Logos";
import ProgPageStyle from "./ProgPageStyle/ProgPageStyle";
import TextProg from "./components/TextProg/TextProg";
import Button from "./components/buttons/Button";

const ProgPage = _ => 
  
  <Animatable.View
  
    useNativeDriver = { true }
    animation = 'flipOutY'

  >

    <ScrollView

      style = { ProgPageStyle.scrllCont }
      contentContainerStyle = { ProgPageStyle.srll2cont }
      
    >

      <Logos />
      <TextProg />
      <Button />

    </ScrollView>

  </Animatable.View>

export default ProgPage
