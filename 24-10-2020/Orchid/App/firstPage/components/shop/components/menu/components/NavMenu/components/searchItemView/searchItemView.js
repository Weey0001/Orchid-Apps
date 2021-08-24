import React from "react";

import { 

  View ,
  Text

 } from "react-native";

import { compose } from "recompose";
import SearchItemViewStyle from "./searchItemViewStyle/searchItemViewStyle";
import HocSearchItem from "./HocSearchItem/HocSearchItem";
import SearchItemInput from "./components/searchiteminput/searchIteminput";
import FlatSearchItem from "./components/flatsearchItem/flatSearchItem";


let SearchItemView = props => 
  <View style = { SearchItemViewStyle.countainer} >

    <SearchItemInput { ...props } />

    <FlatSearchItem { ...props } />
    
  </View>

export default compose ( HocSearchItem ) ( SearchItemView )
  