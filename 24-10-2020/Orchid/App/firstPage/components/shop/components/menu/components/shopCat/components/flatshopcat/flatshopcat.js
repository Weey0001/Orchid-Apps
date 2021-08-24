import React from "react";
import { FlatList } from "react-native";
import FlatShopCatStyle from "./flatshopcatstyle/flatshopcatstyle";
import ItemShopCatView from "../itemshopcat/itemshopcat";

let FlatShopCat = props => 

  <FlatList

    data = { props.dataShopCat }

    renderItem = { 
      
      ( { item , index } ) => 
        
        <ItemShopCatView 
        
          { ...props } 
          datacat = { item } 
          index = { index }
        
        />

    }

    style = { FlatShopCatStyle.countainer }
    contentContainerStyle = { FlatShopCatStyle.contentStyleComp }

    keyExtractor = { 

      ( item , index ) => item._id
      
    }
  
  />

export default FlatShopCat

