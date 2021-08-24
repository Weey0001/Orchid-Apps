import React from "react";

import { 
  
  View ,
  TouchableWithoutFeedback , 
  Text

} from "react-native";

import ItemHeaderCatStyle from "./itemheadercatstyle/itemheadercatstyle";
import HeaderItem from "../../../../../../scharedElement/HeaderItem/headerItem";

let ItemHeaderCat = props => 

  <HeaderItem { ...props }>

      
    <TouchableWithoutFeedback 
    
      style = { ItemHeaderCatStyle.twn } 
      onPress = { _ => props.findCat( props , props.datacat ) }
    
    >    
    
      <View style = { ItemHeaderCatStyle.countainer } >
      
        <Text style = { ItemHeaderCatStyle.txt } >
          
          {
           
            props.CatName ? props.CatName : "Category"
          
          }
        
        </Text>
      
      </View>
    
    </TouchableWithoutFeedback>


  </HeaderItem>
  


export default ItemHeaderCat