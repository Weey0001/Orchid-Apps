import { 
  StyleSheet,
  Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')

export const BtnChatStyles = StyleSheet.create({
    countainer : {
      width:width/3,
      height:width/3,
      backgroundColor:'red'
    }
});