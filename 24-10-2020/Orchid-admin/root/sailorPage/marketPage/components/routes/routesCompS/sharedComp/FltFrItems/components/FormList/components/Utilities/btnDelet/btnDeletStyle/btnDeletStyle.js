import {  
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const BtnDeletStyle = StyleSheet.create ({

  img: {

    width: width / 10 ,
    height: width / 10 ,
    margin: 5 ,

  }

})

export default BtnDeletStyle