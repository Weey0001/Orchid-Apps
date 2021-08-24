import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const MarketStyle = StyleSheet.create({
  
  countainer: {

    width: width ,
    height: height ,
    backgroundColor: "red"

  }

});

export default MarketStyle