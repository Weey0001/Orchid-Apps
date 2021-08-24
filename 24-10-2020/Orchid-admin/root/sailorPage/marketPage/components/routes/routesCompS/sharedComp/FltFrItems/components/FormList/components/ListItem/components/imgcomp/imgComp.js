import React from "react";
import { Image } from "react-native";
import ImgCompStyle from "./imgcompstyle/imgconpstyle";

const ImgComp = props => 

  <Image

    style = { ImgCompStyle.img }
    source = {
      {

        uri: 
          props.Api +
          `/static/images/
          ${ props.itemData.ShopId }/
          ${ props.itemData.folder }/
          ${ props.itemData.MobilImg [ 0 ] }.jpg`

      }
    }

  />

export default ImgComp