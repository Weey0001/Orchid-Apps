import React from "react";
import { Animated } from "react-native";
import { contAnimHeight, contAnimBorder } from "../funcAnim/funcAnim";
import ContainerListItem from "./components/countainer/container";
import ImgComp from "./components/imgcomp/imgComp";
import TitleListItem from "./components/title/titlelistItem";
import PromPrice from "./components/PromPrice/PromPrice";
import RateComp from "./components/rateComp/RateComp";
import DelBtn from "./components/delBtn/delBtn";
import ViewComp from "./components/viewComp/viewComp";
import PromIcon from "../Utilities/promIcon/fromIcon";


const ListItem = props => 

  <Animated.View
    
    style = {{

      height: contAnimHeight ,
      marginBottom: contAnimBorder
      
    }}

  >

    <ContainerListItem { ...props } >

      <ImgComp { ...props } />

      {
        props.itemData.promotion ?
          <PromIcon { ...props } />
          : null
      }

      <TitleListItem { ...props } />
      <PromPrice { ...props } />
      <RateComp { ...props } />
      <DelBtn { ...props } keyselector = "list" />
      <ViewComp { ...props } />

    </ContainerListItem>

  </Animated.View>

export default ListItem