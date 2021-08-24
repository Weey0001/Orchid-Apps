import React from "react";
import { Image } from "react-native-animatable";
import StyleBtn from "../Style/style";

const Active = _ => 
  
  <Image

    source = { require ( "../../img/red.png" ) }
    useNativeDriver = { true }
    style = { StyleBtn.img }
    animation = "bounceIn"

  />

export default Active 