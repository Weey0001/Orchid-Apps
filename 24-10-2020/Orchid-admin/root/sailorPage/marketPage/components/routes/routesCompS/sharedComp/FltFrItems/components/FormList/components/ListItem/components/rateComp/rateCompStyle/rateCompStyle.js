import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const RateCompStyle = StyleSheet.create ({

  container: {

    position: 'absolute' ,
    bottom: 0 ,
    left: 0 ,
    margin: 5 ,
    width: width / 4 * 2

  }

})

export default RateCompStyle