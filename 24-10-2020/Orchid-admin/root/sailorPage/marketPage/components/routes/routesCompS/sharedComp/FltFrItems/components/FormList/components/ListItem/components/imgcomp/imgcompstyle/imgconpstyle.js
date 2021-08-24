import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ImgCompStyle = StyleSheet.create ({

  img: {

    width: width / 3 * 2 + 20 ,
    height: width / 3 * 2 + 20 ,
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: '#ffffff4d'

  }

})

export default ImgCompStyle