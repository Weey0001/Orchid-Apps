import React from "react";
import { compose } from "recompose";

import { 

  FlatList ,
  Dimensions,

} from "react-native";

import IconShopCat from "./iconshopcat/Iconshopcat";
import ItemShopCatFlatStyle from "./itemShopcatFlatStyle/itemShopCatStyle";
import EmptyList from "../../../../../../scharedElement/emptylist/emptyList";
import hocitemshopcat from "./hocitemshopcatflat/hocitemshopcat";

const { width , height } = Dimensions.get( 'screen' )

let FlatitemShopCat = props =>

  <FlatList

    data = { props.dataSpeCat }
    horizontal = {true}
    
    style = { ItemShopCatFlatStyle.flatCount }

    renderItem = {

      ( { item , index } ) => 
        
        <IconShopCat 
          
          indexicon = { index }
          dataiconcat = { item }
          { ...props }
          
        />

    }

    keyExtractor = {

      ( item , index ) => item._id

    }

    ListEmptyComponent = {

      <EmptyList />

    }
  
  />

export default compose ( hocitemshopcat ) ( FlatitemShopCat )