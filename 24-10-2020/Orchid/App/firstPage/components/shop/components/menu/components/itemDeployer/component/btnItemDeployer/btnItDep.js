import React from "react";
import { 

  TouchableWithoutFeedback,
  View ,
  Text

 } from "react-native";
import BtnItemDepStyle from "./btnItemDepStyle/btnItmDepstyle";

const BtnItDep = props => 

  <View style = { BtnItemDepStyle.countainer }>

    <TouchableWithoutFeedback 

      style = { BtnItemDepStyle.twf } 
      onPress = { _ => props.addToFavItem ( props , props.dataDeployer ) }

    >

      <View style = { BtnItemDepStyle.counttxt } >

        <Text style = { BtnItemDepStyle.txt } >

          addFav

        </Text>

      </View>

    </TouchableWithoutFeedback> 

  </View>



export default BtnItDep