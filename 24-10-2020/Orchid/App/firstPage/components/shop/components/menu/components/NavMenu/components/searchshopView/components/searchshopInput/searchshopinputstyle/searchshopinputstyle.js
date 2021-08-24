import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

let SearchShopInputStyle = StyleSheet.create ( {

  countainer: {

    width: width - ( width / 7 + width / 15 ) ,
    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  inp: {

    color: "white" ,
    textAlign: "center"

  }

} )

export default SearchShopInputStyle