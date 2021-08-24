import { 
  
  StyleSheet ,
  Dimensions 

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const FavShopListStyle = StyleSheet.create({
  
  countainer: {

    height: height ,
    width: width - ( width / 7 + width / 15 ) ,
    backgroundColor: "red"

  }

});

export default FavShopListStyle