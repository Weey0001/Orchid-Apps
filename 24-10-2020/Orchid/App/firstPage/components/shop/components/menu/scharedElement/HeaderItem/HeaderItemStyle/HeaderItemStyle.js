import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( 'screen' )

const HeaderItemStyle = StyleSheet.create({
  
  countainer: {
    
    height: width / 6 ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    margin: 20 ,
    borderRadius: 10 ,
    elevation: 1 , 
    borderWidth: 1 ,
    borderColor: "#ffffffb0" ,
    flexDirection: "row"

  } ,

});

export default HeaderItemStyle