import { StyleSheet,Dimensions } from "react-native";

const {width,height} = Dimensions.get('screen')

const ToggleMenuStyle = StyleSheet.create({
  countainer:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:"center",
    position: 'absolute',
    bottom:width/30,
    left:width/30
  },
  twf:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  icn:{
    width:width/7,
    height:width/7
  }

});

export default ToggleMenuStyle