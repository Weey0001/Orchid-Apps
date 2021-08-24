import { 
  
  StyleSheet ,
  Dimensions

 } from "react-native";

const { width , height } = Dimensions.get( "screen" )

const ShopCatStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width , 
    height: height ,
    position: "absolute" , 
    top: 0 , 
    left: 0 ,
    backgroundColor: "#9e41c3c4"

  } 

}) ;

export default ShopCatStyle