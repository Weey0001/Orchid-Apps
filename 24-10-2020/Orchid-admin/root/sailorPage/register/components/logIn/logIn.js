import React from 'react'
import * as Animatable from 'react-native-animatable';
import LogoLog from './components/logo/logolog'
import TitleLog from './components/title/titleLog'
import InpFieldsLog, { BtnS } from './components/inpFields/inpFields'
import LogInStyle from './logInStyle/logInStyle';

export const LogIn = props => 

  <Animatable.View

    useNativeDriver = { true }
    animation = 'bounceIn'
    duration = { 500 }
    style = { LogInStyle.countainer }

  >

    <LogoLog />
    <TitleLog />
    <InpFieldsLog { ...props } />
    <BtnS { ...props } />

  </Animatable.View>
