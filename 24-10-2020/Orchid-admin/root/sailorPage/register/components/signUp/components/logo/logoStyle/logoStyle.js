import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const LogoStyle = StyleSheet.create({
  
  countainer: {
  
    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
  
  } ,

  countImg1: {
   
    position: 'absolute' ,
  
  } ,

  img1: {

    width: width / 2 ,
    height: width / 2 ,

  } ,

  img2: {

    width: width - width / 10 ,
    height: width / 2 - width / 20

  }

});

export default LogoStyle