import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width } = Dimensions.get ( "screen" )

const ContainerIcoStyle = StyleSheet.create ({

  frstCont: {

    backgroundColor: "transparent" ,
    width: width / 3 + 10 ,
    flexDirection: 'column' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
    borderRadius: 5 
  
  }

})

export default ContainerIcoStyle 