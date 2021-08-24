import { 
    StyleSheet, 
    Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')

 const ChatStyle = StyleSheet.create({
     countainer: {
       backgroundColor:'#ffffff7a',
       width:width-10,
       height:height-10,
       justifyContent:'flex-end',
       alignItems:'center',
       borderRadius:20
     }
 });

 export default ChatStyle