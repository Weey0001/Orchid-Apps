import React from "react"
import { 
  FlatList 
 } from "react-native";
import ItemShopView from "./itemView/itemView";
import FlatShopStyle from "./flatshopstyle/flatshopstyle";
import Countainer from "../../scharedElement/countainer/countainer";

 let ShopView = props =>

  <Countainer>

    <FlatList

      style = { FlatShopStyle.countainer }
      contentContainerStyle = { FlatShopStyle.innerComp }
      data = { props.dataCat }
      
      renderItem = { ( { item } ) =>

        <ItemShopView 
        
          dataItem = {item} 
          {...props}
          
        />

      }
      
      keyExtractor = { ( item , index ) => item._id }

    />    
    
  </Countainer>
  


  export default ShopView
