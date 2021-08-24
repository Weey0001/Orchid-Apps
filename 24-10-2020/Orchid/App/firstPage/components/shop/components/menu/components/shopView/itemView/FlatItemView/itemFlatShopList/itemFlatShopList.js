import React from "react";
import { 
  
  View ,
  Text , 
  TouchableWithoutFeedback ,
  Image

} from "react-native";
import ItemShopListStyle from "./itemshoplistshopstyle/itemshoplistshopstyle";
import Item2Flat from "../../../../../scharedElement/item2flat/item2flat";

let ItemFlatShopList = props => 

  <Item2Flat { ...props} >
    <TouchableWithoutFeedback

      onPress = {

        _ => 
          
          props.itemdeployed ( props , props.dataitemShop )

      }

    >

      <View style = { ItemShopListStyle.countainer }>

        <Image 

          source = { require ( '../../../../../tamponfile/images/test.png' ) } 
          style = { ItemShopListStyle.img } 

        />

        <View style = { ItemShopListStyle.countInfo}>

          <Text style = { ItemShopListStyle.txt }>
            {

              JSON.stringify ( props.dataitemShop._id )

            }
          </Text>   

          <Text style = { ItemShopListStyle.price }>
            price
          </Text> 

        </View>

      </View>  

    </TouchableWithoutFeedback>

  </Item2Flat>
  




export default ItemFlatShopList