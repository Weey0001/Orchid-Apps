import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ProgIconStyle = StyleSheet.create({

  countainer: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  countImg: {
    
    backgroundColor: '#000000b8' ,
    borderRadius: 30

  } ,

  img: {

    width: width / 8 ,
    height: width / 8 

  } ,

  txt: {

    color: "white" ,
    width: width / 7

  }

})

export default ProgIconStyle