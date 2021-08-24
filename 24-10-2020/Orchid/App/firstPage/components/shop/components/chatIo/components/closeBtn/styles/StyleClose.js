import { 
  StyleSheet,
  Dimensions
 } from "react-native";

 const {width,heigth} = Dimensions.get("screen")
const CloseBtnChatStyle = StyleSheet.create({
  countainer:{
    position:'absolute',
    backgroundColor:'#41a9c8b5',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    width:width/10,
    height:width/10,    
    borderWidth:2,
    borderColor:'#ffffff3b',
    top:width/30,
    left:width/30
  },
  towf:{
    justifyContent: 'center',
    alignItems: 'center',  
    width:width/10,
    height:width/10,
  },
  txt:{
    textAlign: 'center',
    color:"white",
    fontSize:width/15,
    textShadowColor:'#000000e0',
    textShadowRadius:1

  }
});

export default CloseBtnChatStyle