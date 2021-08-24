import React from "react";
import { View } from "react-native";
import RouteNavExpenderStyle from "./routeNavExpenderStyle/routeNavExpenderStyle";
import BackBtnNavOut from "../backbtnNavout/backbtnNavout";
import FavList from "../favShoplist/favShopList";
import SearchShopView from "../searchshopView/searcnshopView";
import SearchItemView from "../searchItemView/searchItemView";
import FavItemList from "../favItemlist/favItemlist";

let RouteExpender = props => 
  <View style = { RouteNavExpenderStyle.vwbtn }>

    {
      
      props.actionNavToDo === "backbtnnav" ?
      <BackBtnNavOut { ...props } />
      : props.actionNavToDo === "tofavoris" ?
      <FavList { ...props } />
      :props.actionNavToDo === "tofavorisitem" ?
      <FavItemList { ...props } />
      : props.actionNavToDo === "tosearchshop" ?
      <SearchShopView { ...props } />
      : props.actionNavToDo === "tosearchitem" ?
      <SearchItemView { ...props } />
      : null

    }

  </View>


export default RouteExpender