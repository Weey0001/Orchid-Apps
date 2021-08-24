import React from "react";

import { 

  FlatList ,
  View , 
  Text

} from "react-native";
import FlatSearchShopStyle from "./flatSearchShopStyle/flatSearchShopStyle";
import FlatItemSearchShop from "../FlatitemSearchShop/FlatItemSearchShop";

let FlatSearchShop = props => 
  
  <FlatList

    style = { FlatSearchShopStyle.flatCount }
    data = { props.findedShop }
  
    renderItem = {

      ( { item } ) => 

        <FlatItemSearchShop 
          
          { ...props }
          itmdatasrchshop = { item }
        
        />

    }

    ListEmptyComponent = { 

      _ => 

        <View>
          <Text>
            empty
          </Text>
        </View>

    }

    keyExtractor = { 

      ( item , index ) => item._id

    }
  
  />

export default FlatSearchShop