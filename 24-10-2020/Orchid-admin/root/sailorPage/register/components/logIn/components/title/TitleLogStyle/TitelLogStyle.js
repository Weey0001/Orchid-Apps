import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const TitleLogStyle = StyleSheet.create({
  

  TxtCount: {

    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
  
  } ,

  countTxtView : {

    transform: [ { rotate: '-15deg' } ] ,
    flexDirection: 'row' ,
  
  } ,

  txt1: {
    
    color: 'black' ,
    backgroundColor: 'white' ,
    fontSize: width / 8 ,

  } ,

  txt2: {

    color: 'white' ,
    backgroundColor: 'black' ,
    fontSize: width / 8 ,
    top: -10 ,

  }

});

export default TitleLogStyle