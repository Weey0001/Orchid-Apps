import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const PromPriceStyle = StyleSheet.create ({

  container: {

    position: 'absolute' ,
    top: width / 20 ,
    right: 0 ,
    margin: 10

  }

})

export default PromPriceStyle