import React from "react";
import { Articles } from "./corps/articles/articles";
import MarketStyle from "./marketStyle/marketStyle";
import { View } from "react-native";
import { compose } from "recompose";
import HocMarket from "./HocMarket/HocMarket";
import Nav from "./components/nav/nav";
import Routes from "./components/routes/routes";

const MarketPage = props => 
  
  <View style = { MarketStyle.countainer } >

    <Nav { ...props } />
    <Routes { ...props } />
    
  </View>

export default compose ( HocMarket ) ( MarketPage )