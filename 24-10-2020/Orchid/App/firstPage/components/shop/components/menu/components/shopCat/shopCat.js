import React from "react" ;
import Countainer from "../../scharedElement/countainer/countainer";
import FlatShopCat from "../shopCat/components/flatshopcat/flatshopcat";

let ShopCatView = props => 

  <Countainer>
    
    <FlatShopCat { ...props } />

  </Countainer>


export default ShopCatView