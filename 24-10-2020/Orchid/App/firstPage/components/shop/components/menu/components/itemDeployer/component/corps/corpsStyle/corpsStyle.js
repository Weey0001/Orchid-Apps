import React from "react";
import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const CorpStyle = StyleSheet.create({
  
  countainer: {

    // backgroundColor: "black"

  } ,

  title: {

    fontSize: width / 10 ,
    color: 'white' ,
    textAlign: 'center'

  } ,

  price: {

    alignSelf: 'flex-end',
    color: 'white' ,
    margin: 10 ,
    fontSize: width / 15

  } ,

  txt: {

    color: "white" ,
    backgroundColor: "blue" ,
    

  } ,

  createdat: {

    fontSize: width / 30 ,
    color: "#ffffffe0"

  }

});


export default CorpStyle 
