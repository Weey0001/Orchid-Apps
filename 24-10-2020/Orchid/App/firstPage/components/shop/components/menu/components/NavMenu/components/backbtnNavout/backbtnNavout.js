import React from "react";

import { 

  View ,
  TouchableWithoutFeedback

} from "react-native";

import BackBtnStyleNav from "./styleBackBtnNavOut/styleBackBtnNavOut";

let BackBtnNavOut = props => 

  <TouchableWithoutFeedback  
    
    style = { BackBtnStyleNav.countainer } 
    onPress = { props.togglnavInt }
  
  >
   
    <View style = { BackBtnStyleNav.vwbtn } />
      
  </TouchableWithoutFeedback>

export default BackBtnNavOut