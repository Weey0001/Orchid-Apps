import React from "react";
import { 

  View ,
  Text

} from "react-native";
import ViewCompStyle from "./viewCompStyle/viewCompStyle";

const ViewComp = props => 

  <View style = { ViewCompStyle.container } >

    <Text style = { ViewCompStyle.txtV } >
      { props.itemData.view }
    </Text>

    <View style = { ViewCompStyle.line } />

    <Text style = { ViewCompStyle.txt } >
      Views
    </Text>   

  </View>

export default ViewComp