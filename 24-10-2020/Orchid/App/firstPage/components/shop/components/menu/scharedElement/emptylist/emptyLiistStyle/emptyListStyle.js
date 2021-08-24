import { 

  StyleSheet ,
  Dimensions 

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const EmptyListStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    width: width

  } ,

  secCount: {

    justifyContent: 'center' ,
    alignItems: 'center',
    width: width - width / 20 ,
    height: "100%" ,
    backgroundColor: "#00000069" ,
    borderRadius: 20 ,
    borderWidth: 1 ,
    borderColor: "#ffffff0a"

  } ,

  txt: {

    color: "white" , 
    fontSize: width / 10 ,
    
  }

});

export default EmptyListStyle