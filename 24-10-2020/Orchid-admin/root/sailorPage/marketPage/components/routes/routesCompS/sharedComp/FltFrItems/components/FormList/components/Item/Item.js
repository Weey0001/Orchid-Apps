import React from "react";
import { Animated } from "react-native";
import ContainerIco from "./components/containerIco/contaireIco";
import ImageIcon from "./components/imgIco/imgIco";
import PromIcon from "../Utilities/promIcon/fromIcon";
import ViewComp from "./components/viewComp/viewComp";
import DelIcoBtn from "./components/DelIcoBtn/DelIcoBtn";


const ItemIcon = props => 

  <Animated.View
  
    style = {{

      height: contIconAnimHeight ,
      marginBottom: contIconAnimBorder
      
    }}

  >

    <ContainerIco { ...props } >

      <ImageIcon { ...props } />

      {
        props.itemData.promotion ?
          <PromIcon { ...props } />
          : null
      }

      <ViewComp { ...props } />

      <PromIcon { ...props } />
      <DelIcoBtn { ...props } />

    </ContainerIco>

  </Animated.View>

export default ItemIcon