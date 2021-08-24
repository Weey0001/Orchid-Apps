import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const FlatItemSearchShopStyle = StyleSheet.create({

  countainer: {

    justifyContent: 'center' ,
    alignSelf: "stretch" ,
    alignItems: 'center' ,
    height: width / 3 * 2 ,

  } , 

  txt: {

    color: 'white' ,
    textAlign: "center"

  }
  
});

export default FlatItemSearchShopStyle