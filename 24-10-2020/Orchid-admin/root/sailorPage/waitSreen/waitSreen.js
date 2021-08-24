import React from 'react'
import * as Animatable from "react-native-animatable";
import { Title } from './components/title';
import { Logo } from './components/logo';
import WaitScreenStyle from './waitscreenstyle/waitscreenstyle';
import BotText from './components/loadTxt/loadtxt';
import { compose } from 'recompose';
import HocWaitScreen from './HocWaitScreen/HocWaitScreen';

const WaitSreen = _ => {
  
  return (
    <Animatable.View

      style = { WaitScreenStyle.countainer }
      useNativeDriver = { true }
      animation = "fadeIn" 

    >
    
     <Title/>
     <Logo />
     <BotText />
    
    </Animatable.View>
  )
}

export default compose ( 

  HocWaitScreen

) ( WaitSreen )