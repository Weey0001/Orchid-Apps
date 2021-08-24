import {

  StyleSheet ,
  Dimensions

} from "react-native"

const { width , height } = Dimensions.get ( 'screen' )

const StyleCountainer = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width , 
    height: height ,
    position: "absolute" , 
    top: 0 , 
    left: 0 

  } 

});

export default StyleCountainer