import React from "react";
import { 

  View , 
  Button ,
  Text

} from "react-native";
import ItemFlatSearchItemStyle from "./itemflatsearchitemstyle/itemflatsearchitemstyle";

let ItemFlatSearchItem = props => 
  <View style = { ItemFlatSearchItemStyle.counainer }>

    <Text style = { ItemFlatSearchItemStyle.txt }>
      { JSON.stringify ( props.dataItem )}
    </Text>

    <Button 
 
      color = "blue" 
      title = "show" 
      onPress = { 
        
        async _ => {
          
          await props.itemdeployed ( props , props.dataItem )
          await props.togglnavInt ()
        
        }
      
      } 

    />
  </View>

export default ItemFlatSearchItem