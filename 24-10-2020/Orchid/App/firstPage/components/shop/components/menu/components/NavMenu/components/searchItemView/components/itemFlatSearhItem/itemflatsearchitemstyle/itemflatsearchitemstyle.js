import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ItemFlatSearchItemStyle = StyleSheet.create({

  counainer: {

    width: width - ( width / 7 + width / 15 ) ,
    height: width ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    
  } ,

  txt: {

    color: "white",
    textAlign: "center"

  }
  
});

export default ItemFlatSearchItemStyle