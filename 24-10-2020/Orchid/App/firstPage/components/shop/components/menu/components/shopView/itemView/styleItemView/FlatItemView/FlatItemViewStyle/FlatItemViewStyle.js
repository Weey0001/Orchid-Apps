import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions. get ( "screen" )

let FlatItemViewStyle = StyleSheet.create ( {

  flatCount: {

    backgroundColor: "black" ,
    height: width
  }
})

export default FlatItemViewStyle