import { 
  StyleSheet,
  Dimensions
} from "react-native";

const {width,height} = Dimensions.get('screen')

const CountIcnStyle = StyleSheet.create({

  countainer: {

    height: height ,
    width: width / 15 + width / 7 ,
    backgroundColor: 'black' ,
    justifyContent: "space-evenly" ,
    alignItems: 'center' ,

  }

});

export default CountIcnStyle