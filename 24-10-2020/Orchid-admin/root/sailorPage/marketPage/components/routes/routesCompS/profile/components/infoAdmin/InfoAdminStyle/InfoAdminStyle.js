import { 
  
  StyleSheet ,
  Dimensions

} from "react-native"

let { width } = Dimensions.get ( "screen" )

let InfoAdminStyle = StyleSheet.create ({

  continfo: {

    padding: 10 ,
    backgroundColor: '#ffffff2b' ,
    borderRadius: 10 ,
    borderWidth: 2 ,
    borderColor: "#ffffff57" ,
    width: width / 3 * 2

  }

})

export default InfoAdminStyle