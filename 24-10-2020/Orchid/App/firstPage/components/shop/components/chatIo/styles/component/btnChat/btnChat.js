import React from "react";
import * as Animatable from 'react-native-animatable';
import { BtnChatStyles } from "./styles/styles";

export default BtnChat = props => 
  <Animatable.View
    useNativeDriver={true}
    animation="bounceIn"
    duration={1000}
    delay={500}
    style={BtnChatStyles.countainer}
  >


  </Animatable.View>