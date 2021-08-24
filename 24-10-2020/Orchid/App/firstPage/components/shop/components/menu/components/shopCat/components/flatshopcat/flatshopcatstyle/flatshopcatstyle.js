import { 

  StyleSheet , 
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get( "screen" )

const FlatShopCatStyle = StyleSheet.create({
  
  countainer: {

    width: width , 
    height: height - 20 ,

  } , 

  contentStyleComp: {

    justifyContent: 'center' ,
    alignItems: 'center',

  }

});

export default FlatShopCatStyle