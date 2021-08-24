import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get( 'screen' )

const ItemHeaderCatStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    height: width / 6

  } ,

  twn: {

    justifyContent: 'center' ,
    alignItems: 'center'

  } ,


  txt: {

    color: "white" ,
    fontSize: width / 20 

  }

});

export default ItemHeaderCatStyle