import React from "react";

import { 

  View ,
  Text ,
  TouchableWithoutFeedback

} from "react-native";

import ItemShopViewStyle from "./styleItemView/ItemViewStyle";
import FlatItemView from "./FlatItemView/FlatItemView";
import HeaderItem from "../../../scharedElement/HeaderItem/headerItem";

let ItemShopView = props => 

  <View style = { ItemShopViewStyle.countainer } >

    <HeaderItem >

      <TouchableWithoutFeedback

        onPress = {
          
          _ => props.shopdeployer  ( props , props.dataItem ) 
          
        }

      >

        <Text style = { ItemShopViewStyle.txt } >

          {

            props.dataItem.pseudo
            
          }

        </Text>

      </TouchableWithoutFeedback>

    </HeaderItem>



    <FlatItemView { ...props } />

  </View>

export default ItemShopView