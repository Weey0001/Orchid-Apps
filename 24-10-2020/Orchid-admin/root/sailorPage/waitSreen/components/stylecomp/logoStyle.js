import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const LogoStyle = StyleSheet.create({
  
  img: {

    width: width / 3 * 2 ,
    height: width / 3 * 2
  
  }

});

export default LogoStyle