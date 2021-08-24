import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ViewCompStyle = StyleSheet.create ({

  container: {

    flexDirection: 'row' ,

  } ,

  img: {
   
    height: width / 10 ,
    width: width / 8 
   
  } ,

  conttxt: {

    backgroundColor: '#006eadd6' ,
    left: width / 10 - 10 ,
    top: -5 ,
    position: 'absolute' ,
    padding: 2 , 
    borderRadius: 10 ,
    borderWidth: 1 ,
    borderColor: "#ffffffcf" ,
    paddingLeft: 5 ,
    paddingRight: 5
    
  } ,

  txt: {

    color: "white" ,
    fontSize: 10

  }
  

})

export default ViewCompStyle