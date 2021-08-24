import {

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ImgContStyle = StyleSheet.create ({

  cont: {

    alignSelf: 'stretch' ,
    flexDirection: 'column' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    marginBottom: width / 10 

  }

})

export default ImgContStyle