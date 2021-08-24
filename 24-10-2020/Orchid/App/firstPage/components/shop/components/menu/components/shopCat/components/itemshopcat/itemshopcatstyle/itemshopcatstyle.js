import { 

  StyleSheet ,
  Dimensions

} from "react-native";

let { width , height } = Dimensions.get( "screen" )

const ItemShopCatStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: "100%" , 

  }

});

export default ItemShopCatStyle