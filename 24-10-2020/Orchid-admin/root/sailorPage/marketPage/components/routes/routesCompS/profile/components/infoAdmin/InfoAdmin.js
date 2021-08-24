import React from "react";
import { View } from "react-native";
import InfoAdminStyle from "./InfoAdminStyle/InfoAdminStyle";
import LazyText from "./components/LazyText/LazyText";
import FormDate from "./components/formdate/formDate";

let InfoAdmin = props => 

  <View style = { InfoAdminStyle }>

    <LazyText

      title = "Nom"
      data = { props.shopInfo.firstName }

    />

    <LazyText

      title = "Prenom"
      data = { props.shopInfo.lastName }

    />

    <LazyText

      title = "Numero de Telephone"
      data = { props.shopInfo.phone }

    />

    <LazyText

      title = "e-Mail"
      data = { props.shopInfo.email }

    />

    {/* <LazyText

      title = "view"
      data = 

    /> */}

    <FormDate time = { props.shopInfo.updatedAt } /> 

  </View>

export default InfoAdmin