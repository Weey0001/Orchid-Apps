import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const InpCompStyle = StyleSheet.create({
  
  countainer: {
  
    backgroundColor: 'white' ,
    margin: width / 75 ,
    borderRadius: 20 ,
    elevation:2
  
  } ,

  inp: {
  
    width: width / 3 * 2 ,
    textAlign: 'center'
  
  }

});

export default InpCompStyle