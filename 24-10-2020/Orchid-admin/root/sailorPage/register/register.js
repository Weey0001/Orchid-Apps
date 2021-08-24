import React from 'react'
import { View , Text } from 'react-native';
import SignUp from './components/signUp/signUp';
import { LogIn } from './components/logIn/logIn';
import HocReg from './HocReg/HocReg';
import { compose } from 'recompose';

const Register = props => 

  <View style = { { flex: 1 } } >

    {

      props.actionReg === "toSignUp" ?
      <SignUp { ...props } />
      : props.actionReg === "toLogIn" ?
      <LogIn { ...props } />
      : null
    
    }

    {/* <Text style={{color:'white'}}>
      Register
    </Text> */}
  
  </View>
  

export default compose (

  HocReg

) ( Register )
