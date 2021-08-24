import React from "react";
import FlatItemShopCat from "./components/itemshopcatflat/itemshopcatflat";
import ItemHeaderCat from "./components/itemheadercat/itemheadercat";
import ItemCountainer from "../../../../scharedElement/itemCountainer/itemCountainer";

let ItemShopCatView = props =>

  <ItemCountainer index = { props.index }>

    <ItemHeaderCat { ...props } />
    <FlatItemShopCat { ...props } />

  </ItemCountainer>

export default ItemShopCatView 