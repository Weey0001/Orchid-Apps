import React from "react";
import { 

  View ,
  TextInput

} from "react-native";
import InpSearchShopFavStyle from "./inpSearchShopFavstyle/inpSeachShopFavStyle";

let InpSearchShopFav = props => 
  
  <View style = { InpSearchShopFavStyle.countainer } >

    <TextInput 
    
      value = { props.searchTextShopFav } 
      placeholder = "Find Shop" 
      underlineColorAndroid = "white" 
      onChangeText = { 

        txt => props.FindShopFav ( props , txt )
        
      } 
    
    />
    
  </View>

export default InpSearchShopFav