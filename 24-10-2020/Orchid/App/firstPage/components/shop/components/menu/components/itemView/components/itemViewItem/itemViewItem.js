import React from "react";
import { 
  View,
  TouchableWithoutFeedback,
  Text
 } from "react-native";
import ItemViewStyleItem from "./itemViewStyleItem/itemViewStyleItem";

 const ItemViewItem = props =>
   <View style={ItemViewStyleItem.countainer}>
     <TouchableWithoutFeedback 
       style={ItemViewStyleItem.twf}
       onPress={_=>props.itemdeployed(props,props.dataItem)}
     >
       <Text style={ItemViewStyleItem.txt}>
         {props.dataItem._id}
       </Text>
     </TouchableWithoutFeedback>
   </View>

export default ItemViewItem