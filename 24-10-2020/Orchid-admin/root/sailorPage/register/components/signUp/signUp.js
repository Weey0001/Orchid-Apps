import React from 'react'
import * as Animatable from 'react-native-animatable';
import Logo from './components/logo/Logo';
import Title from './components/title/Title';
import InpFields from './components/inpFields/inpFields';
import SignUpStyle from './signUpStyle/signUpStyle';


const SignUp = props =>

  <Animatable.View

    useNativeDriver = {true}
    animation = 'bounceIn'
    duration = {500}
    style = { SignUpStyle.countainer }
  
  >

    <Logo />
    <Title />
    <InpFields { ...props } />

  </Animatable.View>

export default SignUp