import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width } = Dimensions.get ( "screen" )

const PromOnStyle = StyleSheet.create ({

  txt: {

    color: '#f5e400' ,
    fontSize: width / 10 ,
    fontWeight: 'bold' ,
    textShadowColor: "#ff0000" ,
    textShadowRadius: 10 ,
    textAlign: 'right' ,
    alignSelf: 'flex-end' 

  }

})

export default PromOnStyle