import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const ItemFlatItemStyle = StyleSheet.create({

  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 20

  }
  
});

export default ItemFlatItemStyle