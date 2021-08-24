import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get( 'screen' )

const DeployerShopStyle = StyleSheet.create({
  
  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,
    position: "absolute" , 
    top: 0 ,
    left: 0 ,
    width: width , 
    height: height ,

  } ,

  txt: {

    color: "white" ,
    fontSize: width / 20
  }

});

export default DeployerShopStyle