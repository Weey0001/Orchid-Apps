import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( 'screen' )

const TitleStyle = StyleSheet.create({

  subCount: {
   
    flexDirection: 'row' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
  
  } ,

  txtcount: {
   
    transform: [ { rotate: '-15deg' } ] ,
    flexDirection: 'row' ,
  
  } ,

  txt1: {

    color: 'white' ,
    backgroundColor: 'black' ,
    fontSize: width / 8 ,
    
  } ,

  txt2: {

    color: 'black' ,
    backgroundColor: 'white' ,
    fontSize: width / 8 ,
    top: -10 ,
    
  } 
  
});

export default TitleStyle