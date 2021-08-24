import { 
  StyleSheet,
  Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')

 const MenuStyle = StyleSheet.create({
   countainer:{
     position:"absolute",
     width:width,
     height:height,
     top:0,
     left:0
   }
 });

 export default MenuStyle