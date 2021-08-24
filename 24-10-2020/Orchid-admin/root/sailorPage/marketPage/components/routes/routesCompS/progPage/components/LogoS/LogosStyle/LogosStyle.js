import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const LogosStyle = StyleSheet.create ({

  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  img1: {
    
    width: width / 4 * 2 ,
    height: width / 4 * 2 

  } ,
   
  img2: {

    width: width / 3 * 2 ,
    height :width / 3 ,
    position: 'absolute'

  }

})

export default LogosStyle