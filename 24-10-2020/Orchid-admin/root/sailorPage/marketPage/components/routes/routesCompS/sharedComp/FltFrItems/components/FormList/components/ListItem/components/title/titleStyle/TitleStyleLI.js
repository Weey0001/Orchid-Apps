import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const TitleStyleList = StyleSheet.create ({

  txt: {

    color: "#ffffff" ,
    fontSize: width / 20 ,
    textAlign: 'center' ,
    fontWeight: 'bold' ,
    height: width / 13 ,
    overflow: 'hidden' ,
    position: 'absolute' ,
    top: 0 ,
    margin: 5 ,
    width: width / 3 ,
    textShadowColor: 'black' ,
    textShadowRadius: 1

  }

})

export default TitleStyleList