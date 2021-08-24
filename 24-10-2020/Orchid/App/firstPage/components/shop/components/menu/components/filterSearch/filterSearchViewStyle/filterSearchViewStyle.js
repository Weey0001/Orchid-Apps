import { StyleSheet, Dimensions } from "react-native";

const {width,height} = Dimensions.get('screen')

const FilterSearchViewStyle = StyleSheet.create({
  countainer:{
    position:"absolute",
    top:0,
    left:0,
    width:width,
    height:height,
    backgroundColor:'#85680096',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    color:'white'
  }

});

export default FilterSearchViewStyle