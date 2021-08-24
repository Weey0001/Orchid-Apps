import {  

  StyleSheet ,
  Dimensions 

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const AirBnbStyle = StyleSheet.create ({

  container: {

    backgroundColor: '#00000045' ,
    borderRadius: 20 ,
    borderWidth: 1 ,
    borderColor: "#ffffff1f" ,
    marginBottom: 5

  } ,

  air: {

    width: width / 15 ,
    height: width / 15 ,

  }

})

export default AirBnbStyle