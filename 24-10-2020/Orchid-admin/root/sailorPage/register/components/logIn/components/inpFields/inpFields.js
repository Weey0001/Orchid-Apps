import React , { useRef } from "react";
import InpFieldStyle from "./impFieldsStyle/inpFieldStyle";
import BtnReg from "../../../components/btnReg/btnReg";
import { 
  
  View ,
  Keyboard ,
  TouchableOpacity ,
  Text

} from "react-native";
import { InputComp } from "../../../components/inputComp/inputComp";

let InpFieldsLog = props => {

  let _email = useRef () ,
  _pass = useRef () 

  return (

    <View style = { InpFieldStyle.countainer }>

      <InputComp
        
        ref = { _email }
        value = { props.email }
        onChangeText = { props.setEmail }
        placeHolder = "Email"
        index = { 1 }
        onSubmitEditing = { _ => _pass.current.focus () }
        
      />

      <InputComp
      
        ref = { _pass }
        value = { props.pass }
        onChangeText = { props.setPass }
        placeHolder = "Mot de pass"
        index = { 2 }
        onSubmitEditing = { _ => Keyboard.dismiss () }
      
      />

      <TouchableOpacity 

        style = { InpFieldStyle.to } 
        onPress = { _ => forgotPassWord () }
      
      >

        <Text style = { InpFieldStyle.txt } >

          Mot de pass oublier ?
        </Text>

      </TouchableOpacity>  

    </View>

  )
}

export default InpFieldsLog

export const BtnS = props => 

  <View style = { InpFieldStyle.btnCount } >

    <View style = { InpFieldStyle.btnSubCount } >

      <BtnReg

        someFunction = { _ => props.ToSignUp () }
        color = '#0095c29e'
        title = "S'enregistrer"
        index = { 3 }

      />

      <BtnReg

        someFunction = { _ => props.OnSubmitLogIn ( props ) }
        color = '#c2b5009e'
        title = 'Check'
        index = { 4 }

      />

    </View>  
              
  </View>