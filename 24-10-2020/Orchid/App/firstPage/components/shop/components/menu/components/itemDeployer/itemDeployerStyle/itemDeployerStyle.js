import { StyleSheet,Dimensions } from "react-native";

const { width , height } = Dimensions.get( 'screen' )

const ItemDeployerStyle = StyleSheet.create({

  countainer: {

    position: "absolute" ,
    top: 0 ,
    left: 0 ,
    justifyContent: 'center' , 
    alignItems: 'center' ,
    width: width ,
    height: height

  } ,

  txt: {

    color: 'white' ,
    backgroundColor: "blue",
    textAlign: 'center',

  },

  scw: {

    width: width , 
    height: height ,
  
  } ,

  contscv: {

    justifyContent: 'center' ,
    alignItems: 'center',

  } ,


});

export default ItemDeployerStyle