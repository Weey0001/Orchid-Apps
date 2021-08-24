import React from "react";
import { 

  View ,
  TextInput

} from "react-native";
import InpSearchItemFavStyle from "./inpSearchItemFavStyle/inpSearchItemFavStyle";

let InpSearchItemFav = props => 
  
  <View style = { InpSearchItemFavStyle .countainer } >

    <TextInput 
    
      value = { props.searchTextItemFav } 
      placeholder = "Find item" 
      underlineColorAndroid = "white" 
      onChangeText = { 

        txt => props.FindItemFav ( props , txt )
        
      } 
    
    />
    
  </View>

export default InpSearchItemFav