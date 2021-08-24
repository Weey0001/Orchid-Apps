import { StyleSheet , Dimensions} from "react-native";

const {width,height} = Dimensions.get('screen')

const NavStyleMenu = StyleSheet.create({
  countainer:{
    backgroundColor:'#00000069',
    justifyContent: 'center',
    alignItems: "flex-start",
    position: 'absolute',
    height:height,
    width:width,
    flexDirection:'row'
  }
});

export default NavStyleMenu