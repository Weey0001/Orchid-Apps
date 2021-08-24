import React from "react";
import { 
  
  FlatList ,
  View ,
  Text

} from "react-native";
import ItemFlatFav from "../itemFlatFavItem/ItemFlatFavItem";
import FlatFavItemStyle from "./FlatFavItemStyle.js/FlatFavItemstyle";

let FlatFavItem = props => 

  <FlatList

    style = { FlatFavItemStyle.flatCount }
    contentContainerStyle = { FlatFavItemStyle.contentStyle }

    data = { 
      props.searchTextItemFav === "" ? 
      props.dataFavItem
      : props.findedFavItem
    }
    
    renderItem = {

      ( { item , index } ) => 
        
        <ItemFlatFav

          { ...props}
          itemFavItemData = { item }
        
        />

    }
    keyExtractor = { ( item , index ) => item._id}
    ListEmptyComponent = { 

      _ => <View>
        <Text>
          empty
        </Text>
      </View>

    }
  
  />

export default FlatFavItem