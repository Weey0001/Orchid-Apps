import React from "react";

import { 

  View ,
  Button

} from "react-native";

import CountIcnStyle from "./allnavIconStyle/allnaviconstyle";

let CountNavIcon = props => 

  <View style = { CountIcnStyle.countainer } >



    <Button 
    
      color = "#00ff00" 
      title = "ToFav" 
      onPress = { _ => props.ToFavoris () } 

    />

    <Button 
        
      color = "#00ff00" 
      title = "ToFavItem" 
      onPress = { _ => props.ToFavorisItem () } 

    />
     
    <Button 
     
      color = "#00ff00" 
      title = "searchShop" 
      onPress = { _ => props.ToSearchShop () } 
       
    />

    <Button 
    
      color = "#00ff00" 
      title = "searchItem" 
      onPress = { _ => props.ToSearchItem () } 
    
    />  

  </View>

export default CountNavIcon