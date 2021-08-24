import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width } = Dimensions.get ( "screen" )

const SocialIconStyle = StyleSheet.create ({

  img: {

    width: width / 8,
    height: width / 8

  }

})

export default SocialIconStyle