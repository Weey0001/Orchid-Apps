import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const BtnItemDepStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    position: 'absolute' ,
    bottom: height / 3 - width / 30 ,
    left: width / 15

  } ,

  twf: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  counttxt: {

    justifyContent: 'center',
    alignItems: 'center',

  } ,

  txt: {

    color: "white" ,
    backgroundColor:'#008bc7' ,
    fontSize: width / 20 ,
    borderRadius: width / 30 ,
    padding: 5 ,
    borderWidth: 1 ,
    borderColor: "#ffffff47"

  }
  
});

export default BtnItemDepStyle