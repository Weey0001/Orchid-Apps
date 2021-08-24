import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const LoadTxtStyle = StyleSheet.create({
  
  chargCountainer: {

    flexDirection: 'row',
    margin: 20
  
  } ,

  charg: {

    color: "#ffffffa6" ,
    textShadowColor: 'black' ,
    textShadowRadius: 1 ,
    fontSize: width / 15 ,
    marginLeft: 5

  }

});

export default LoadTxtStyle