import React from "react";
import { View } from "react-native";
import UserRateTxt from "./components/userRateTxt/userRateTxt";
import AirBnbRating from "./components/AirBnb/AirBnb";
import FormDate from "./components/formDate/formDate";
import RateCompStyle from "./components/RateCompStyle/RateCompStyle";
import BtnProm from "../../../Utilities/BtnProm/btnProm";

const RateComp = props => 

  <View style = { RateCompStyle.container } >

    <UserRateTxt { ...props } />
    <AirBnbRating { ...props } />
    <FormDate { ...props } />

    <View style = { RateCompStyle.container } >

      <BtnProm { ...props } /> 
      <Text style = { RateCompStyle.txt } >
        Promotion { props.itemData.promotion ? 'active' : 'inactive' }
      </Text>       

    </View>

  </View>

export default RateComp