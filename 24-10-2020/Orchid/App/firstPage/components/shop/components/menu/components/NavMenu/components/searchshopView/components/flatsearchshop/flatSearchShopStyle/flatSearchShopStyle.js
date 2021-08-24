import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

let FlatSearchShopStyle = StyleSheet.create ( {

  flatCount: {

    backgroundColor: "blue" ,
    flex: 1,
    alignSelf: 'stretch'

  } ,

  contStyle: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  }

})

export default FlatSearchShopStyle