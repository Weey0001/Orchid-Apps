import { 
  StyleSheet,
  Dimensions
 } from "react-native";

const { width } = Dimensions.get( 'screen' )

const FlatItemTypeStyle = StyleSheet.create({

  countainer: {

    width: width ,
    height: width / 3 ,

  } ,

  flatCount: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
  }

});

export default FlatItemTypeStyle