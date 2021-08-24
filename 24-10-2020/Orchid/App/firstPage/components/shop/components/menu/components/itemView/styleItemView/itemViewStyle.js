import { StyleSheet,Dimensions } from "react-native";

const {width,heigth} = Dimensions.get('screen')

const ItemViewStyle = StyleSheet.create({
  countainer:{
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatL:{
    width:width,
    backgroundColor:'black'
  },
  flatcontS:{
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ItemViewStyle