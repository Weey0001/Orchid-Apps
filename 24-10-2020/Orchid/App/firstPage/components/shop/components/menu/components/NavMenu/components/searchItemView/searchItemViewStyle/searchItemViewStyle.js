import { 

  StyleSheet ,
  Dimensions 

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const SearchItemViewStyle = StyleSheet.create({
  
  countainer: {

    height: height ,
    width: width - ( width / 7 + width / 15 ) ,
    backgroundColor: "purple",
    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

    color: 'white' ,
    fontSize: width / 20 ,
    textAlign: "center"

  }

});

export default SearchItemViewStyle