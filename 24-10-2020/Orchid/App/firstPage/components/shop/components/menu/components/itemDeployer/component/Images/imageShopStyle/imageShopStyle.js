import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ImageShopStyle = StyleSheet.create({
  
  img: {
 
    width: width - width / 20 ,
    height: width - width / 20 ,
    borderWidth: 2 ,
    borderColor: "#ffffff47" ,
    marginTop : width / 20 ,
    borderRadius: 30 ,
    backgroundColor : "#00000063"

  }

});

export default ImageShopStyle