import { 
    StyleSheet,
    Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get('screen')

 export const InpMessStyle = StyleSheet.create({
    countainer: {
      height:width/8,
      width:width-15,
      backgroundColor:'#ffffff80',
      justifyContent: "space-around",
      alignItems:'center',
      paddingHorizontal:10,
      flexDirection:'row',
      margin:5,
      borderRadius:40,
      borderWidth:1,
      borderColor:'#ffffff1f'
    },
    inp:{
       flex: 7,
       textAlign:'center'
    }
 });

