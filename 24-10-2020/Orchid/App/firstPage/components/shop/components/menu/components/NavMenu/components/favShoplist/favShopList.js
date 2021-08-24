import React from "react";
import { View } from "react-native";
import FlatFavShop from "./components/flatfav/flatFav";
import FavShopListStyle from "./favshoplistyle/favshopliststyle";
import InpSearchShopFav from "./components/inpSearchShopfav/InpSearchShpFav";

const FavList = props => 
  
  <View style = { FavShopListStyle.countainer }>

    <InpSearchShopFav { ...props } />
    
    <FlatFavShop { ...props } />

  </View>

export default FavList