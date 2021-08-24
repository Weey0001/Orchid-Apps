import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const NavStyle = StyleSheet.create({
  
  countainer: {

    flexDirection: 'column-reverse' ,
    justifyContent: "flex-start" ,
    alignItems: "center",
    flex: 1,
    backgroundColor:'#00705aad',
    margin:10,
    borderRadius:10,
    elevation:2,
    paddingBottom:height/20,
    borderWidth:1,
    borderColor:'#ffffff1a'
    
  } ,

  countProg: {

    flexGrow: 1 ,
  
  }

});

export default NavStyle