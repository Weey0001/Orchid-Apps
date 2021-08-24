import React from "react";

import { 

  FlatList ,
  View , 
  Text

 } from "react-native";
import FlatSearchItemStyle from "./flatSeachItemStyle/flatSearchItemSearchStyle";
import ItemFlatSearchItem from "../itemFlatSearhItem/itemFlatSearchItem";

let FlatSearchItem = props => 
  <FlatList

    style = { FlatSearchItemStyle.flatCount }
    contentContainerStyle = { FlatSearchItemStyle.contentStyle }
    data = { props.findedItem }
    renderItem = { 

      ( { item , index } ) => 
        
        <ItemFlatSearchItem 

          { ...props } 
          dataItem = { item }
        
        />

    }
    ListEmptyComponent = {

      _ => <View>
        <Text>
          empty
        </Text>
      </View>
    }
    keyExtractor = { ( item , index ) => item._id }
  
  />

export default FlatSearchItem