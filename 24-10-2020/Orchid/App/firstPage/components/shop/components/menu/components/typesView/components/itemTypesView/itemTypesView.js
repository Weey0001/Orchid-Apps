import React from "react";

import { 

  View ,
  TouchableWithoutFeedback ,
  Text

 } from "react-native";

import ItemTypeStyle from "./styleItemTypeView/itemTypeViewStyle";
import { FlatType } from "./flatItemType/flatItemType";
import HeaderItem from "../../../../scharedElement/HeaderItem/headerItem";

const ItemTypeView = props => 

  <View style = { ItemTypeStyle.countainer } >

    <HeaderItem >

      <TouchableWithoutFeedback 

        style = { ItemTypeStyle.twf } 
        onPress = { _ => props.findType( props , props.dataType ) }

      >
      
        <Text style = { ItemTypeStyle.txt } >
          { props.dataType._id }
        </Text>
      
      </TouchableWithoutFeedback>  

    </HeaderItem>

    <FlatType { ...props } />

  </View>

 export default ItemTypeView