import { 
    StyleSheet,
    Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')
 
 const StyleChat = StyleSheet.create({
     countainer:{
       height:height,
       width:width,
       justifyContent: 'center',
       alignItems: 'center'
     }
 });

 export default StyleChat;