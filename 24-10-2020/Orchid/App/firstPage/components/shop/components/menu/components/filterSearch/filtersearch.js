import React from "react";
import { 
  View,
  Text,
  Dimensions
 } from "react-native";
import FilterSearchViewStyle from "./filterSearchViewStyle/filterSearchViewStyle";
import { compose } from "recompose";
import HocFilterSearch from "./hocFilterSearch/HocFilterSearch";

let FilterSearchView = props => 
  <View style={FilterSearchViewStyle.countainer}>
    <Text style={FilterSearchViewStyle.txt}>
      filter view
    </Text>
  </View>

export default compose(
  HocFilterSearch
)(FilterSearchView)