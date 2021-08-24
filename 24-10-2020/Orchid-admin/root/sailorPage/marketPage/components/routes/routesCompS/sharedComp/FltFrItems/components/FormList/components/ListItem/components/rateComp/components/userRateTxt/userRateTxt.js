import React from "react";
import { Text } from "react-native";
import UserRateTxtStyle from "./userRateTxtStyle/userRateTxtStyle";

const UserRateTxt = props => 

  <View style = { UserRateTxtStyle.container } >
    <Text style = { UserRateTxtStyle.txt } >
      
      { props.itemData.userRated } vote { props.itemData.userRated > 1 ? "s" : "" }
      
    </Text>
  </View>

export default UserRateTxt