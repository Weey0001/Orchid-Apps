import React from "react";
import { View } from "react-native";
import ItemCountainerStyle from "./itemCountainerstyle/itemCountainerStyle";

let ItemCountainer = ( { children ,index } ) => 
  
  <View style = { ItemCountainerStyle.countainer }> 
    
    { children }

  </View>

export default ItemCountainer
