import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const InpSearchShopFavStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width - ( width / 7 + width / 15 ) ,
    height: width / 10
  } ,
   
  inp: {

    textAlign: "center" , 
    color: "white" ,
  }

});

export default InpSearchShopFavStyle