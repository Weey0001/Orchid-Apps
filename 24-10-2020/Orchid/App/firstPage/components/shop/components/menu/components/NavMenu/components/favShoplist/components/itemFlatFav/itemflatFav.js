import React from "react";

import { 

  View ,
  Text ,
  Button

} from "react-native";
import ItemStyleFlatFav from "./styleItemFlatFav/styleItemFlatFav";

const ItemFlatFav = props => 
  
  <View style = { ItemStyleFlatFav.countainer } > 
    <Text style = { ItemStyleFlatFav.txt } >
      
      { JSON.stringify ( props.itemFavData ) }

    </Text>
    <Button 
    
      color = "#00ff00" 
      title = "button" 
      onPress = {

        _ => props.rmvfromFav ( props , props.itemFavData )

      } 
    
    />
  </View>

export default ItemFlatFav