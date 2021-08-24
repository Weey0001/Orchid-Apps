import { 
  StyleSheet,
  Dimensions
 } from "react-native";

 const {width,height} = Dimensions.get("screen")

const TypesViewStyle = StyleSheet.create({

  countainer:{

    width: width ,
    height: height 

  } ,

  flatCount: { 

    justifyContent: 'center' ,
    alignItems: 'center' ,    
    height: width / 2

  } ,

  txt: {

    color:'white'

  }

});

 export default TypesViewStyle