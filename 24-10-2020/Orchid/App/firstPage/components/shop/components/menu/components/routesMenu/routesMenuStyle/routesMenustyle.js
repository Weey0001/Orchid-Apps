import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get('screen')

const RoutesMenuSyle = StyleSheet.create({
  countainer:{
    position:"absolute",
    top:0,
    left:0,
    width:width,
    height:height
  }
});

export default RoutesMenuSyle