import React from "react";
import { View } from "react-native";
import { compose } from "recompose";
import NavStyleMenu from "./navMenuStyle/navMenuStyle";
import CountNavIcon from "./allnavIcon/allnavIcon";
import RouteExpender from "./components/routeNavExpender/routeNavExpender";
import HocNavMenu from "./hocnavmenu/HocNavMenu";

let NavMenu = props =>
  <View style={NavStyleMenu.countainer}>

    <CountNavIcon { ...props } />
    <RouteExpender { ...props } />

  </View>

export default compose ( HocNavMenu ) ( NavMenu )