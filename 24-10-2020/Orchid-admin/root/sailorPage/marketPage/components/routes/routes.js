import React from "react";
import { View } from "react-native";
import RoutesStyle from "./routesStyle/routesStyle";
import ProgPage from "./routesCompS/progPage/progPage";

const Routes = props => 

  <View style = { RoutesStyle.container } >

    {

      props.actionMarket === "progPage" ?
      <ProgPage { ...props } />
      : props.actionMarket === "allItems" ?
      { /* <AllItems { ...props } /> */ }
      : props.actionMarket === "addItems" ?
      { /* <AddItems { ...props } /> */ }
      : props.actionMarket === "addFrom" ?
      { /* <AddForm { ...props } /> */ }
      : props.actionMarket === "showItem" ?
      { /* <ShowItem { ...props } /> */ }
      : props.actionMarket === "details" ?
      { /* <Details { ...props } /> */ }
      : props.actionMarket === "edit" ?
      { /* <Edit { ...props } /> */ }
      : props.actionMarket === "search" ?
      { /* <Search { ...props } /> */ }
      : props.actionMarket === "profile" ?
      { /* <Profile { ...props } /> */}
      : null

    }

  </View>

export default Routes