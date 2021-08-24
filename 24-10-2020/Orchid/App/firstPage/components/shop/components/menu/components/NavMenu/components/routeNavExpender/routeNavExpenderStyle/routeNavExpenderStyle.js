import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get( "screen" )

const RouteNavExpenderStyle = StyleSheet.create({

  vwbtn:{

    height: height ,
    width: width - ( width / 7 + width / 15 ) ,
  } ,
  
});

export default RouteNavExpenderStyle