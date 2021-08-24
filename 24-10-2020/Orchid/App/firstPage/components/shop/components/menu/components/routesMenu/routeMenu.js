import React from "react";
import { View } from "react-native";
import RoutesMenuSyle from "./routesMenuStyle/routesMenustyle";
import ShopView from "../shopView/shopView";
import TypesView from "../typesView/typesview";
import AllTypeItemView from "../itemView/itemsView";
import ItemDeployer from "../itemDeployer/itemDeployer";
import FilterSearch from "../filterSearch/filtersearch";
import DeployerShop from "../deployerShop/deployerShop";
import ShopCatView from "../shopCat/shopCat";

let RoutesMenu = props => 
  <View style = { RoutesMenuSyle.countainer } >

    {

      props.actionMenuToDo === "toshopcat" ? 
      <ShopCatView { ...props } />
      : props.actionMenuToDo === "todeployershop" ?
      <DeployerShop { ...props } />
      : props.actionMenuToDo === "toshopview" ?
      <ShopView { ...props } />
      : props.actionMenuToDo === "totypeview" ?
      <TypesView { ...props } />
      : props.actionMenuToDo === "toitemview" ? 
      <AllTypeItemView { ...props } />
      : props.actionMenuToDo === "toitemdeployer" ?
      <ItemDeployer { ...props } />
      : props.actionMenuToDo === "tofiltersearch" ?
      <FilterSearch { ...props } />
      : null

    }

  </View>


export default RoutesMenu