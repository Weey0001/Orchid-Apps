import { StyleSheet } from "react-native";

const InpFieldStyle = StyleSheet.create({

  countainer: {

    flexDirection: 'column' ,
    justifyContent: 'center' ,
    alignItems: 'center' ,
  
  } ,

  btnCount: {

    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  } ,

  to: {
    
    justifyContent: 'center' ,
    alignItems: 'center' ,

  } ,

  txt: {

    color: '#ffffff9e' ,
    borderBottomWidth: 2 ,
    borderColor: '#ffffff9e'

  } ,

  btnSubCount: {

    flexDirection: 'row' ,
    justifyContent: 'space-around' ,
    alignItems: 'center' ,

  }
  
});

export default InpFieldStyle