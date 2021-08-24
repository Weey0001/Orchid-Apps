import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ContStyle = StyleSheet.create ({

  container: {

    width: width / 3 * 2 + 30 ,
    height: width / 3 * 2 + 20 ,
    margin: 5 ,
    justifyContent: 'flex-start' ,
    alignItems: 'center' ,
    flexDirection: 'column' ,

  } ,

  twF: {

    justifyContent: 'center' ,
    alignItems: 'center' , 
    flexDirection: 'column' ,
    height: width / 3 * 2 + 20 ,

  }

})

export default ContStyle