import { 

  StyleSheet ,
  Dimensions

} from "react-native";

const { width , height } = Dimensions.get ( "screen" )

const FlatSearchItemStyle = StyleSheet.create({
  
  flatCount: {

    height: height - width / 10 ,
    width: width - ( width / 7 + width / 15 ) ,
    backgroundColor: "green"

  } ,

  contentStyle: {

    justifyContent: 'center' ,
    alignItems: 'center' ,

  }

});

export default FlatSearchItemStyle