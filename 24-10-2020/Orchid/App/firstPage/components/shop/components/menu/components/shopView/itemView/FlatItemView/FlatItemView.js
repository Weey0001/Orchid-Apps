import React from "react" 

import { 
  
  FlatList ,
  Text ,
  View,
  Dimensions

} from "react-native";

import FlatItemViewStyle from "./FlatItemViewStyle/FlatItemViewStyle";
import EmptyList from "../../../../scharedElement/emptylist/emptyList";
import ItemFlatShopList from "./itemFlatShopList/itemFlatShopList";
import { compose } from "recompose";
import hocItemFlatList from "../hocItemFlatList/hocItemFlatList";

let FlatItemView = props => 
 
  <FlatList

    data = { props.dataitemShopList }
    style = { FlatItemViewStyle.flatCount }
    horizontal = { true }
    contentContainerStyle = { FlatItemViewStyle.contStyle }
    renderItem = {
      
      ( { item , index } )=> 

      <ItemFlatShopList 
      
        dataitemShop = { item }
        { ...props }
        index = { index } 
      
      />

    }

    ListEmptyComponent = {

        <EmptyList />

    }

    keyExtractor = {

      ( item , index ) => item._id

    }

  />

export default compose ( hocItemFlatList ) ( FlatItemView )