import React from "react";
import { View } from "react-native";
import FavItemStyle from "./favitemlistStyle/favItemlistStyle";
import FlatFavItem from "./components/FlatFavItem/FlatFavItem";
import InpSearchItemFav from "./components/inputSearchitemFav/inputSearchItemFav";

let FavItemList = props => 

  <View style = { FavItemStyle.countainer } >
    
    <InpSearchItemFav { ...props } />
    
    <FlatFavItem { ...props } />
    
  </View>

export default FavItemList