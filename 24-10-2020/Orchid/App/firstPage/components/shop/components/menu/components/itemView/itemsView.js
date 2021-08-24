import React from "react";
import { 
  View,
  Text,
  FlatList
 } from "react-native";
import ItemViewStyle from "./styleItemView/itemViewStyle";
import ItemViewItem from "./components/itemViewItem/itemViewItem";
import Countainer from "../../scharedElement/countainer/countainer";


const AllTypeItemView = props => 

  <Countainer>

    <FlatList
       
      style = { ItemViewStyle.flatL }
      contentContainerStyle = { ItemViewStyle.flatcontS }
      data = { props.datafromType }
      renderItem = {

        ( { item } ) =>

          <ItemViewItem 
            
            dataItem = { item } 
            { ...props }
          
          />

      }
      keyExtractor = { 
        
        ( item , index ) => item._id 
      
      }
    />

  </Countainer>

export default AllTypeItemView