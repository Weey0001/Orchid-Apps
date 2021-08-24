import React from "react";
import { 

  TextInput ,
  View 

 } from "react-native";
import SearchItemInputStyle from "./searchItemInputStyle/searchItemInputStyle";

let SearchItemInput = props => 
  <View style = { SearchItemInputStyle.countainer} >
    <TextInput 
      
      style = { SearchItemInputStyle.inp}
      value = { props.textItemSearch } 
      placeholder = "enteritem" 
      underlineColorAndroid = 'white' 
      onChangeText = { txt => props.setTextItemSearch ( txt )}
      onEndEditing = { _ => props.searchItem () } 

    />
  </View>

export default SearchItemInput