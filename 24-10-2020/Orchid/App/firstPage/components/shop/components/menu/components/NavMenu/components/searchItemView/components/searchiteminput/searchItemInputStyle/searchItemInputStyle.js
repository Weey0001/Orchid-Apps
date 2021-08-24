import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const SearchItemInputStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width - ( width / 7 + width / 15 ) ,

  } ,

  inp: {

    color: "white" ,
    textAlign: "center"

  }

});

export default SearchItemInputStyle