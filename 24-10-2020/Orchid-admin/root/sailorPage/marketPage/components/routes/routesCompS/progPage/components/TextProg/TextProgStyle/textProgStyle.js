import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width } = Dimensions.get ( "screen" )

const TextProgStyle = StyleSheet.create ({

  container: {

    justifyContent: 'center' ,
    alignItems: 'center'

  } ,

  wellTxt: {

    color: 'white' ,
    fontSize: width / 15 ,
    margin: 10 ,
    textAlign: 'center'

  } ,

  frst: {

    color: 'white' ,
    textAlign: 'center' ,
    margin: 20

  } ,

  contact: {

    color: 'white' ,
    fontSize: width / 20

  } ,

  scndTxt: {

    color: 'white' ,
    textAlign: "center" ,
    margin: 20

  }

})

export default TextProgStyle