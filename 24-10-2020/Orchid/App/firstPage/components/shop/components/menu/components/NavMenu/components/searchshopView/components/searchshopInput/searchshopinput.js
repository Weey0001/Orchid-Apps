import React from "react";
import { 

  TextInput ,
  View

 } from "react-native";
import SearchShopInputStyle from "./searchshopinputstyle/searchshopinputstyle";

let SearchShopInput = props => 
  <View style = { SearchShopInputStyle.countainer } >

    <TextInput 
      style = { SearchShopInputStyle.inp }
      value = { props.textSearchShop } 
      placeholder = "Enter Shop" 
      underlineColorAndroid = "#ffffff99" 
      onChangeText = { 
        text => props.setTextSearchShop ( text )
       } 
      onSubmitEditing = { _ => props.SearchShop () }
      
    
    />
    
  </View>

export default SearchShopInput