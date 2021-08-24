import React from "react";

import { 

  View ,
  TouchableWithoutFeedback ,
  Text ,
  Image

} from "react-native";

import IconShopCatStyle from "./iconshopcatStyle/iconshopcatstyle";
import Item2Flat from "../../../../../../../scharedElement/item2flat/item2flat";

let IconShopCat = props => 

  <Item2Flat index = { props.indexicon }>

    <View style = { IconShopCatStyle.countainer } >
      
      <TouchableWithoutFeedback 

        style = { IconShopCatStyle.twf } 
        
        onPress = { 
        
          _ =>
            
            props.shopdeployer ( props , props.dataiconcat )
        
        }

      >
        <View  
        
          style = { IconShopCatStyle.countImg }

        >
          <Image  

            style = { IconShopCatStyle.img }
            source = { require ( '../../../../../../../tamponfile/images/test.png') }

          />
          
          <Text style = { IconShopCatStyle.txt } >
            
            { props.dataiconcat._id }

          </Text>

        </View>
        


      </TouchableWithoutFeedback>

    </View>

  </Item2Flat>



export default IconShopCat