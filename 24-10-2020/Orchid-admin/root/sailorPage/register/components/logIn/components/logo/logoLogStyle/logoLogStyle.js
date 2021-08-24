import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const LogoLogStyle = StyleSheet.create({
  
  countainer: {

    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  img1Count: {
  
    position: 'absolute',
  
  } ,

  img1: {

    width: width / 2 ,
    height: width / 2 ,

  } ,

  img2: { 

    width: width - 50 ,
    height: width / 2 - 25
  
  }

});

export default LogoLogStyle