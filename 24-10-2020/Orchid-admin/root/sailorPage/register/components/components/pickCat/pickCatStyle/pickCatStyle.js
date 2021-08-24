import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const PickCatStyle = StyleSheet.create({
  
  countainer: {
  
    backgroundColor: 'white' ,
    margin: width / 75 ,
    borderRadius: 20 ,
    elevation:2
  
  } ,

  pic: {

    width: width / 3 * 2 ,
    height: 30 ,

  }

});

export default PickCatStyle