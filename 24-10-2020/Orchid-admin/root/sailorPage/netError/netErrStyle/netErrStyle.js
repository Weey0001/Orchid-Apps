import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const NetErrStyle = StyleSheet.create({

  countainer: {

    backgroundColor: '#000000b3' ,
    justifyContent: 'space-around' ,
    alignItems: 'center' ,

  } ,

  title: {

    color: "white" ,
    fontSize: 40

  } ,

  img: {

    width: width / 3 * 2 - 20 ,
    height: width / 3 * 2
  } ,

  messTxt: {

    color: "white" ,
    fontSize: 15 ,
    textAlign: "center"

  } ,

  countBtn: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    margin: 10 ,
    backgroundColor: "#0882c9b3" ,
    alignSelf: 'center' ,
    padding: 6 ,
    borderBottomEndRadius: 20 ,
    borderTopStartRadius: 20

  } ,

  txtBtn: {

    color: "white" ,
    textShadowColor: "#000000" ,
    textShadowRadius: 2 ,
    fontSize: 20
    
  }
  
});

export default NetErrStyle