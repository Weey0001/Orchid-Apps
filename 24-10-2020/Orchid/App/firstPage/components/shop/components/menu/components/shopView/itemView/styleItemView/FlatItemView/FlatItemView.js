import React from "react" 

import { 
  
  FlatList ,
  Text ,
  View

} from "react-native";

import EmptyList from "../../../../../scharedElement/emptylist/emptyList";
import FlatItemViewStyle from "./FlatItemViewStyle/FlatItemViewStyle";

let FlatItemView = props => 
 
  <FlatList

    data = {[]}
    style = { FlatItemViewStyle.flatCount }
    renderItem = {
 

      <View>
        <Text>
          Item
        </Text>        
      </View>


    }

    ListEmptyComponent = {

      <View style = {
        
        {

          backgroundColor: "red"

        }

      }

      >

      <EmptyList />        
      </View>

    }

    keyExtractor = {

      ( item , index ) => item._id

    }
  />

export default FlatItemView