import React from "react";
import { 
  View,
  Text,
  Dimensions,
  FlatList
 } from "react-native";
import TypesViewStyle from "./styleTypesView/styleTypesView";
import ItemTypeView from "./components/itemTypesView/itemTypesView";
import Countainer from "../../scharedElement/countainer/countainer";

 const {width,height} = Dimensions.get('screen')

let TypesView = props => 

  <Countainer>

    <FlatList

      style = { TypesViewStyle.countainer }
      // contentContainerStyle = { TypesViewStyle.flatCount }

      data = { props.dataShop }
      renderItem = {

        ( { item } ) =>

          <ItemTypeView 
        
            dataType={item} 
            {...props}
          
          />
      }

      keyExtractor = {
        
        ( item , index ) => item._id
      
      }
      
   />

  </Countainer>  


 export default TypesView