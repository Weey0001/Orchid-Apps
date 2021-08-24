import React from "react";
import { 

  StyleSheet ,
  Dimensions

} from "react-native";

let { width , height } = Dimensions.get ( 'screen' )

const FavItemStyle = StyleSheet.create({
  
  countainer: {

    height: height ,
    width: width - ( width / 7 + width / 15 ) ,
    backgroundColor: "red"

  }

});

export default FavItemStyle