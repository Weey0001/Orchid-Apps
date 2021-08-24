import React from "react";
import FlatForItemsStyle from "./FltFrItemsStyle/fltfritemsStyle";
import { compose } from "recompose";
import HocFFI from "./HocFFI/HocFFI";
import { 
  
  FlatList ,
  View

} from "react-native";
import FormList from "./components/FormList/FormList";
import ToolTip from "./components/ToolTip/ToolTip";


const FlatForItems = props => 

  <View style = { FlatForItemsStyle.container }>

    <FlatList

      style = { FlatForItemsStyle.container }
      contentContainerStyle = { FlatForItemsStyle.flIS2cont }
      horizontal = { false }
      data = { props.usedData }
      numColums = { props.toggleFormList }
      key = { props.toggleFormList }
      keyExtractor = { ( item , index ) => item._id }
      renderItem = { 
        
        ( { item , index } ) => 
          
          <FormList
          
            item = { item }
            index = { index }
            { ...props }

          />
      }

    /> 

    <ToolTip { ...props } />  

  </View>



export default compose ( HocFFI ) ( FlatForItems )