import React from "react";

import { 

  View ,
  Text ,
  Button,
  ScrollView

} from "react-native";

import ItemDeployerStyle from "./itemDeployerStyle/itemDeployerStyle";
import Countainer from "../../scharedElement/countainer/countainer";
import ImageShop from "./component/Images/images";
import CorpTxt from "./component/corps/corpstxt";
import BtnItDep from "./component/btnItemDeployer/btnItDep";

let ItemDeployer = props => 

  <Countainer>
    
    <ScrollView
      
      style = { ItemDeployerStyle.scw }
      contentContainerStyle = { ItemDeployerStyle.contscv }

    >

      <ImageShop { ...props } />
      <CorpTxt { ...props } />
      <BtnItDep { ...props } />

    </ScrollView>

  </Countainer>

export default ItemDeployer