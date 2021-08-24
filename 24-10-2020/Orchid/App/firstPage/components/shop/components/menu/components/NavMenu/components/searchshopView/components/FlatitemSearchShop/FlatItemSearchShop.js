import React from "react";
import { 

  View ,
  Text ,
  Button

} from "react-native";
import FlatItemSearchShopStyle from "./FlatItemSearhShopStyle/FlatItemSearchShopStyle";

let FlatItemSearchShop = props => 

  <View style = { FlatItemSearchShopStyle.countainer }>
    
    <Text style = { FlatItemSearchShopStyle.txt }>
      
      {

        JSON.stringify ( props.itmdatasrchshop )
      }

    </Text>
    
    <Button 
    
      color = "#00ff00" 
      title = "button" 
      onPress = { 

        async _ => {

          await props.shopdeployer ( props , props.itmdatasrchshop )

          await props.togglnavInt ()

        }

      } 
    
    />
  
  </View>

export default FlatItemSearchShop