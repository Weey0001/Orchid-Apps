import { 
  StyleSheet,
  Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')

 export const ChatTxtStyle = StyleSheet.create({
   countainer : {
     width:width,
     height:width,
     backgroundColor:'#000000b3',
     
   }
 });

