import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get( 'screen' )

const IconStyle = StyleSheet.create({
   
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    backgroundColor: 'black' ,
    width: width / 2 ,
    height: width / 3 ,
    margin: width / 30

  } ,

  twf: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
   
  } ,

  txt:{
    
    color: 'white' ,
    textAlign: 'center' ,
    position: "absolute" ,
    backgroundColor: "red" ,
    top: 0 ,
    textShadowColor: 'black' ,
    textShadowRadius: 1 ,
    fontWeight: 'bold'
  
  } ,

  img: {

    width: width / 3 ,
    height: width / 3 ,
    position: 'absolute' ,
    left: 0

  } ,
   
  price: {

    color: "white" ,
    fontSize: width / 30 ,
    alignSelf: 'flex-end',
    marginTop: width / 20

  }

});

 export default IconStyle

