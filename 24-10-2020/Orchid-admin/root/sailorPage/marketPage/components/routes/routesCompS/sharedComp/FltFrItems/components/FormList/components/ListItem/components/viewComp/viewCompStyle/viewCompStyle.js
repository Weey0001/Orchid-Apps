import {  

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ViewCompStyle = StyleSheet.create ({

  container: {

    position: 'absolute' ,
    right: 0 ,
    top: width / 3 ,
    margin: 5 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    backgroundColor: '#00b5c24f' ,
    borderRadius: 5 ,
    borderWidth: 1 ,
    borderColor: "#ffffff42"

  } ,

  txtV: {

    color: "#ffffff" ,
    fontSize: width / 15 ,
    textShadowColor: 'black' ,
    textShadowRadius: 1 ,

  } ,

  line: {

    height: 2 ,
    backgroundColor: '#ffffff' ,
    width: '80%'

  } ,

  txt: {

    color: "#ffffff" ,
    textShadowColor: 'black' ,
    textShadowRadius: 1 ,
    fontWeight: 'bold' ,
    margin: 5

  }

})

export default ViewCompStyle