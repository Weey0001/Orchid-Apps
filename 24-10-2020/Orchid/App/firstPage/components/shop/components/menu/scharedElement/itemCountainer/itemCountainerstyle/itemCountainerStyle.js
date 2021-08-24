import {  

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

let ItemCountainerStyle = StyleSheet.create ( {

  countainer: {

    height: width - width / 8 , 
    marginBottom: width / 20
  }

})

export default ItemCountainerStyle