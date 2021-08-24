import React from "react";

import { 

  View ,
  TouchableWithoutFeedback ,
  Text ,
  Image
  
} from "react-native";

import IconStyle from "./iconitemtypeStyle/iconStyle";
import Item2Flat from "../../../../../../scharedElement/item2flat/item2flat";

const IconTypeItem = props => 

  <Item2Flat { ...props }>
    
    <TouchableWithoutFeedback
      
      style = { IconStyle.twf } 
      onPress = { 
        
        _ => props.itemdeployed ( props , props.dataItem ) }

    >
      <View style = { IconStyle.countainer }>

        <Image 
        
          source = { require ( '../../../../../../tamponfile/images/test.png' ) } 
          style = { IconStyle.img } 
        
        />

        <Text style = { IconStyle.txt }>
      
          {
            props.dataItem._id
          }
      
        </Text> 

        <Text style = { IconStyle.price }>
          price
        </Text>

      </View>

    
    </TouchableWithoutFeedback>

  </Item2Flat>


export default IconTypeItem