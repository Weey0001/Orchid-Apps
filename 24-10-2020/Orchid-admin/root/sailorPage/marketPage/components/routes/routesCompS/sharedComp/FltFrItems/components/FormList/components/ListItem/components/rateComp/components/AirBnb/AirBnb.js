import React from "react";
import { View } from "react-native";
import { AirbnbRating } from 'react-native-ratings'
import AirBnbStyle from "./AirBnbStyle/AirBnbStyle";

const AirBnbRating = props => 

  <View style = { AirBnbStyle.container }>
    <AirbnbRating

      showRating = { false }
      starStyle = { AirBnbStyle.air }
      isDisabled = { true }
      defaultRating = { props.itemData.rating }

    />             
  </View>

export default AirBnbRating