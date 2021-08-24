import React from "react";
import { View } from "react-native";
import { Image } from "react-native-animatable";
import ImageShopStyle from "./imageShopStyle/imageShopStyle";

let ImageShop = props => 
  
  <Image 
   
    useNativeDriver = { true }
    style = { ImageShopStyle.img } 
    source = { require ( "../../../../tamponfile/images/test.png")}
    
  />

export default ImageShop