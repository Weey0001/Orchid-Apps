import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const BackStyle = StyleSheet.create({
  
  countainer: {

    flex: 1 ,
    justifyContent: 'center' ,
    alignItems: 'center'

  } ,

  img1: {

    width: width / 6 * 7 ,
    height: height / 5 * 6 ,
    position: 'relative',

  } ,

  img2: {

    width: width / 6 * 7 ,
    height: height / 5 * 6 ,
    position: 'absolute',

  } ,

  childCount: {

    position: 'absolute',
    width: width ,
    height: height

  }

});

export default BackStyle