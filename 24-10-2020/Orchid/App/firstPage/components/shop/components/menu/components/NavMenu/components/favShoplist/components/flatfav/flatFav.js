import React from "react";

import { View , Text , FlatList } from "react-native";
import ItemFlatFav from "../itemFlatFav/itemflatFav";
import FlatFavStyle from "./flatFavstyle/flatFavStyle";

let FlatFavShop = props => 
  <FlatList

    style = { FlatFavStyle.flatCount }
    contentContainerStyle = { FlatFavStyle.contentStyle }
    
    data = { 
    
      props.searchTextShopFav === "" ?
      props.dataFav
      : props.findedShopFav
    
    }
    
    renderItem = { 
      
      ( { item , index } ) => 
  
        <ItemFlatFav 
        
          itemFavData = { item }
          { ...props }

        />
    }

    keyExtractor = { ( item , index ) => item._id }
    
    ListEmptyComponent = {
      _ => <View>
        <Text>
          empty
        </Text>
      </View>
    }
  />

export default FlatFavShop