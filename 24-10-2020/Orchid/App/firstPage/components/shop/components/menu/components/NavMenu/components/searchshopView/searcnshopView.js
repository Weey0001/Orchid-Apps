import React from "react";

import { 

  View ,
  Text

} from "react-native";
import ShopSearchViewStyle from "./searchShopViewStyle/searchShopViewStyle";
import { compose } from "recompose";
import HocSearchShop from "./HocSearchShopView/HocSearchShop";
import SearchShopInput from "./components/searchshopInput/searchshopinput";
import FlatSearchShop from "./components/flatsearchshop/flatSearchShop";

let SearchShopView = props => 
  
  <View style = { ShopSearchViewStyle.countainer } >

    <SearchShopInput { ...props } />
    <FlatSearchShop { ...props } />
    

  </View>

export default compose ( HocSearchShop ) ( SearchShopView ) 