import {

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const ItemShopViewStyle = StyleSheet.create({

  countainer: {

    width: width ,
    height: width / 3 * 2 ,
    marginVertical: width / 30

  } ,

  txt: {

    color: 'white' ,
    fontSize: width / 10 ,
    textAlign: "center"

  }
  
});

export default ItemShopViewStyle