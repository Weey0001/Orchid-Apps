import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const ItemStyleFlatFav = StyleSheet.create ({

  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 20

  }

})

export default ItemStyleFlatFav