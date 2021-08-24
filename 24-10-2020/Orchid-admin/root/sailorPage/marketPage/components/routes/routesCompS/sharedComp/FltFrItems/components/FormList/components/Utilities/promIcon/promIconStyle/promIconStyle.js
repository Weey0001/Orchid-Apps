import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const PromIconStyle = StyleSheet.create ({

  container: {

    position: 'absolute' ,
    top: 15 

  } ,

  txt: {

    color: "#ffffff" ,
    textShadowColor: '#00000080' ,
    textShadowRadius: 3 ,
    transform: [{ rotate: '-45deg' }] ,
    fontWeight: 'bold' ,
    backgroundColor: '#b3000080' ,
    fontSize: width / 15 ,
    borderRadius: 20 ,
    borderWidth: 1 ,
    borderColor: "#ffffff29" ,
    elevation: 2

  }

})

export default PromIconStyle