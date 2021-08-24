import React from "react";
import { Image } from "react-native-animatable";
import StyleBtn from "../Style/style";

const Inactive = _ => 
  
  <Image

    source = { require ( "../../img/gris.png" ) }
    useNativeDriver = { true }
    style = { StyleBtn.img }
    animation = "bounceIn"

  />

export default Inactive 