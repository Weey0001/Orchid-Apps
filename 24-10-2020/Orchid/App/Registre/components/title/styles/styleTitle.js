import { 
  StyleSheet,
  Dimensions
 } from "react-native";

const {width,heigth} = Dimensions.get('screen')

const TitleStyle = StyleSheet.create({
  countainer:{
    backgroundColor:'black'
  },
  txt:{
    color:'white',
    fontSize:width/6
  }
});

export default TitleStyle