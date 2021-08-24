import React from "react";
import { 
  
  View ,
  Text

} from "react-native";

let LazyText = props => 
  
  <View>

    <Text>

      { props.title } :

    </Text>

    <Text>

      { props.data }

    </Text>

  </View>

export default LazyText