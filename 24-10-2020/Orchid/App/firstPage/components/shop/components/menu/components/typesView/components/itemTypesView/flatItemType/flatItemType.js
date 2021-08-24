import React from "react";
import { compose } from "recompose";

import { 

  View ,
  FlatList ,
  Text ,
  Dimensions

 } from "react-native";

import FlatItemTypeStyle from "./flatItemTypeStyle/flatItemTypeStyle";
import { HocFlatItemType } from "./hocFlatType/hocFlatType";
import IconTypeItem from "./iconItemType/iconItemType";
import EmptyList from "../../../../../scharedElement/emptylist/emptyList";

const {width,height} = Dimensions.get('screen')

let FlatItemType = props =>

  <FlatList

    style = { FlatItemTypeStyle.countainer }
    data = { props.dataFlatTypeItem }

    contentContainerStyle = { FlatItemTypeStyle.flatCount }

    renderItem = {

      ( { item , index } ) => 

        <IconTypeItem 

          dataItem = { item }
          { ...props } 
          index = { index }

        />

    }

    ListEmptyComponent = {

      <EmptyList/>
    
    }

    keyExtractor = { ( item , index ) => item._id } 
    horizontal = { true }
    
  />

export const FlatType = compose( HocFlatItemType ) ( FlatItemType )