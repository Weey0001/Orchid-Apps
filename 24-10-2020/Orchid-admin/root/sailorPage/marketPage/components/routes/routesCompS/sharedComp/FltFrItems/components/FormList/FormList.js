import React from "react";
import HocFormList from "./HocFormList/HocFormList";
import ListItem from "./components/ListItem/ListItem";
import ItemIcon from "./components/Item/Item";

const FormList = ( props , item , index ) => {

  return props.toggleFormList === 1 ? 
    <ListItem 

      itemData = { item } 
      index = { index } 
      { ...props }

    />
    : <ItemIcon 
    
      itemData = { item } 
      index = { index } 
      { ...props } 
    
    />

}

export default compose ( HocFormList ) ( FormList )