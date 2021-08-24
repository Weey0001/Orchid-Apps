import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get("screen")

const ItemViewStyleItem = StyleSheet.create({
  countainer:{
    backgroundColor:'green',
    marginVertical:200,
    justifyContent: 'center',
    alignItems: 'center',
    width:width/3*2,
    height:width/3
  },
  twf:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    color:'white',
    paddingVertical:20,
  }
});

export default ItemViewStyleItem