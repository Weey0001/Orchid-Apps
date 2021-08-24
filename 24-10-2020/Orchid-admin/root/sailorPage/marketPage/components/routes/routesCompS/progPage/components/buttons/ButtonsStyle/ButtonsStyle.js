import { 
  
  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ButtonsStyle = StyleSheet.create ({

  container: {

    flexDirection: 'row' ,
    width: width / 2 , 
    justifyContent: "space-around",
    alignItems: 'center',
    margin: 20

  }

})

export default ButtonsStyle