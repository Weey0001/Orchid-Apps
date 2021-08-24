import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const ToolsStyle = StyleSheet.create({
  
  countTo: {

    borderRadius: 20 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    backgroundColor: '#1c408796' ,
    elevation: 2 ,
    marginTop: 10
    // marginBottom:5
  
  } ,

  img: {

    width: width / 7 ,
    height: width / 7

  } ,

  title: {

    color: "#ffffffcf" ,
    height: 20 ,
    overflow: 'hidden' ,
    textAlign: 'center'
  
  }

});

export default ToolsStyle