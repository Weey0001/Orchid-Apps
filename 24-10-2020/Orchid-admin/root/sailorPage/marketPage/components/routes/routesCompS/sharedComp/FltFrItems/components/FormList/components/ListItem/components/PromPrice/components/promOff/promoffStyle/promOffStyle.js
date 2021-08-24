import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const PromOffStyle = StyleSheet.create ({

  txt: {

    color: '#ffffff' ,
    textAlign: 'right' ,
    alignSelf: 'flex-end' ,
    fontSize: width / 15 ,
    textShadowColor: 'black' ,
    textShadowRadius: 2

  }

})

export default PromOffStyle