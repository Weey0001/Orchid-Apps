import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width } = Dimensions.get ( "screen" )

const BtnProfileStyle = StyleSheet.create({
  
  img: {

    width: width / 7 ,
    height: width / 7 ,
    borderRadius: 50 ,
    borderWidth: 1 ,
    borderColor: "#ffffffcf"

  } ,

  titleProf: {

    color: "#ffffffcf"
  
  }

});

export default BtnProfileStyle