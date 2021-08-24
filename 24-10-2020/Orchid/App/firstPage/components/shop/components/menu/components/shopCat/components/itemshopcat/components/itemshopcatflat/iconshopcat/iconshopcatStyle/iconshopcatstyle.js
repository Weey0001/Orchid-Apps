import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get( 'screen' )

const IconShopCatStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    margin: width / 50 ,
    borderRadius: 20

  } ,

  twf: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  countImg: { 

    width: width / 2 ,
    height: width / 2 ,
    justifyContent: 'center' ,
    alignItems: 'center',

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 30 ,
    padding: 5 ,
    textAlign: 'center' ,
    borderRadius: 5 ,
    textShadowRadius: 1 ,
    textShadowColor: 'black' ,

  } , 

  img: {

    width: width / 2 , 
    height: width / 2 ,
    position: "absolute" ,
    borderRadius: width / 10

  }

});

export default IconShopCatStyle