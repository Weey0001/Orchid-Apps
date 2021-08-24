import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions. get ( "screen" )

let FlatItemViewStyle = StyleSheet.create ( {

  flatCount: {

    height: width / 2
    
  } ,

  contStyle: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  }
})

export default FlatItemViewStyle