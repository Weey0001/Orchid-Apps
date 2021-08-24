import React from "react"
import { 
  View,
  Text,
  FlatList
 } from "react-native";
 import { compose } from "recompose";
import hocmenu from "./HocMenu/hocmenu";
import MenuStyle from "./menuStyle/menuStyle";
import RoutesMenu from "./components/routesMenu/routeMenu";
import ToggleNavMenu from "./components/toggleNav/toggleNav";
import NavMenu from "./components/NavMenu/navMenu";

let menu = props => 

  <View style={MenuStyle.countainer}>
     
    <RoutesMenu {...props} />

    {
       
      props.togglNav
      &&
      <NavMenu {...props} />
    
    }
    
    <ToggleNavMenu {...props} />
     
   </View>

 export const Menu = compose(hocmenu)(menu)