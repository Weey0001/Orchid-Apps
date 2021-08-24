import React from "react";
import { 
  
  View ,
  Text 

} from "react-native";
import CorpStyle from "./corpsStyle/corpsStyle";

const CorpTxt = props => 
  
  <View style = { CorpStyle.countainer }>

    <Text style = { CorpStyle.title }>
      Title
    </Text>

    <Text style = { CorpStyle.price } >
      price
    </Text>

    <Text style = { CorpStyle.createdat }>
      Added at : { props.dataDeployer.createdAt }
    </Text>

    <Text style = { CorpStyle.txt } >
    
      { 
        props.dataDeployer
        &&
        JSON.stringify ( props.dataDeployer )
      }

    </Text>
    
  </View>

export default CorpTxt