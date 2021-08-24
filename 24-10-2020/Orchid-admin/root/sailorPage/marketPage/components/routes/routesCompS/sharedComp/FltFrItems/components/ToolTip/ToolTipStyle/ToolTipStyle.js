import { 

  StyleSheet ,
  Dimensions

 } from "react-native";

const { width } = Dimensions.get ( "screen" )

const ToolTipStyle = StyleSheet.create ({

  container: {

    position: 'absolute' ,
    bottom: width / 6 ,
    right: 0 ,
    margin: 5 ,

  } ,

  contTWF: {

    backgroundColor: '#0000009c' ,
    borderRadius: 20 ,
    padding: 10

  } ,

  inImg: {

    width: width / 10 ,
    height: width / 10

  }

})

export default ToolTipStyle