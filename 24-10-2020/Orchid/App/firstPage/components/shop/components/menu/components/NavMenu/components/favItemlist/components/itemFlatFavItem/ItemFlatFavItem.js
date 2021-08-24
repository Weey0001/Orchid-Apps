import React from "react";

import { 

  View ,
  Text ,
  Button

} from "react-native";
import ItemFlatItemStyle from "./itemflatfavitemstyle/ItemFlatFavItemStyle";

const ItemFlatFav = props => 

  <View style = { ItemFlatItemStyle .countainer }>
    <Text style = { ItemFlatItemStyle.txt }>

      {
        JSON.stringify ( props . itemFavItemData )
      }

    </Text>

    <Button 
        
      color = "#00ff00" 
      title = "button" 
      onPress = {

        _ => props.rmvfromfavitem ( props , props.itemFavItemData )

      } 
      
    />

  </View>

export default ItemFlatFav