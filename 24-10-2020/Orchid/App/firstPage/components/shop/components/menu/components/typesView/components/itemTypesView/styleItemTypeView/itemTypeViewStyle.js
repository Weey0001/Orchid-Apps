import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( 'screen' )

const ItemTypeStyle = StyleSheet.create({

  countainer: {

    marginVertical: 10 ,
    justifyContent: 'center' ,
    alignItems: 'center',
    width: width
    

  } ,

  twf: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

   color: 'white' ,
   padding: 20 ,
   textAlign: "center"

  } 

});

export default ItemTypeStyle