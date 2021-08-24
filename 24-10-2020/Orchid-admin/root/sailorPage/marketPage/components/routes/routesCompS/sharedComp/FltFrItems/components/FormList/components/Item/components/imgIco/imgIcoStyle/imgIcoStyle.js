import {  

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ImgIcoStyle = StyleSheet.create ({

  imgIco: {

    width: width / 3 ,
    height: width / 3 ,
    margin: 5 ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: '#ffffff29'

  }

})

export default ImgIcoStyle