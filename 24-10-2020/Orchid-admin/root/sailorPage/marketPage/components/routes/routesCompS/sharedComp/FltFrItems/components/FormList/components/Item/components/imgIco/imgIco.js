import React from "react";
import { Image } from "react-native-animatable";
import ImgIcoStyle from "./imgIcoStyle/imgIcoStyle";

const ImageIcon = props => 

  <Image
  
    useNativeDriver = { true }
    animation = "bounceIn"
    style = { ImgIcoStyle.imgIco }
    source = {{

      uri: 
        props.Api +
        `/static/images/
        ${ props.itemData.ShopId }/
        ${ props.itemData.folder }/
        ${ props.itemData.MobilImg [ 0 ] }
        .jpg
        `
    }}

  />

export default ImageIcon