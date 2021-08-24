import React from "react";

import { 

  View , 
  Text ,
  Button

 } from "react-native";
import DeployerShopStyle from "./deployerShopStyle/deployerShopStyle";
import Countainer from "../../scharedElement/countainer/countainer";

let DeployerShop = props => 
  
  <Countainer>
    
    <Text style = { DeployerShopStyle.txt }>

      { JSON.stringify ( props.dataDeployerShop ) }

    </Text>
    
    <Button 
    
      color = "#00ff00" 
      title = "button" 
      onPress = { _ => props.findShop ( props , props.dataDeployerShop ) } 
  
    />

    <Button 
    
      color = "#00ff00" 
      title = "add fav" 
      onPress = { _ => props.addToFav( props , props.dataDeployerShop ) } 
    
    />

  </Countainer>

export default DeployerShop