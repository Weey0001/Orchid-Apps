import React from "react";
import NavStyle from "./navStyle/navStyle";
import BtnProfile from "./components/btnProfile/btnProfile";
import IconProg from "./components/progIcon/ProgIcon";

const Nav = props =>
  
  <View style = { NavStyle.countainer } >

    <Tools

      setsomeState = { _ => props.ToAllItems () }
      somekey = "Tous"
      bckg = "#2e2e2e0a"
      delaycount = { 4 }
      source = { require( './img/tab/all.png' ) }
      animation = 'tada'
      duration = { 800 }
      iterationCount = 'infinite'
      iterationDelay = { 2000 }
    
    />

    <Tools

      setsomeState = { _ => props.ToAddItems () }
      somekey = "Ajouter"
      bckg = "#2e2e2e0a"
      delaycount = {3}
      source = { require ( './img/tab/addItm.png' ) }
      animation = 'rubberBand'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 3000 }
    
    />

    <Tools

      setsomeState = { _ => props.ToSearch () }
      somekey = "Recherche"
      bckg = "#2e2e2e0a"
      delaycount = { 2 }
      source = { require ( './img/tab/0.png' ) }
      animation = 'swing'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 2000 }
    
    />

    <BtnProfile { ...props } />
    
    <View style = { NavStyle.countProg } >
    
      <IconProg { ...props } />
    
    </View>

  </View>  


export default Nav