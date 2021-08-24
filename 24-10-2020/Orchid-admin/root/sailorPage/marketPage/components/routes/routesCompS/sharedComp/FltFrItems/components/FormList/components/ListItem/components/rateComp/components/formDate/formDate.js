import React from "react";
import { Text , View } from "react-native";
import { formatDate } from "./formatDate/formatDate";

const FormDate = props => 

  <View>
    
    <Text
      style={{
        color:'#ffffffe3',
        textAlign:'left',
        textShadowColor:'black',
        textShadowRadius:1,
        backgroundColor:'#4a4a4a85',
        borderRadius:10,
        padding:3

      }}
    >
      
     { formatDate ( props.itemData.createdAt ) }

    </Text>

  </View>

export default FormDate