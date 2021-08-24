import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const ShopSearchViewStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center',
    height: height ,
    width: width - ( width / 7 + width / 15 ) ,

  } , 
  
  txt: {

    textAlign: "center" ,
    color: "white"
  }

});

export default ShopSearchViewStyle