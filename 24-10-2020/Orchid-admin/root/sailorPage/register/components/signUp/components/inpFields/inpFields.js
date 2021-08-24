import React , { useRef } from "react";
import InpFieldStyle from "./impFieldsStyle/inpFieldStyle";
import BtnReg from "../../../components/btnReg/btnReg";
import { View , Keyboard } from "react-native";
import { InputComp } from "../../../components/inputComp/inputComp";
import PickCat from "../../../components/pickCat/pickCat";

let InpFields = props => {

  let _firstName = useRef () ,
  _lastName = useRef () ,
  _email = useRef () ,
  _phone = useRef () ,
  _pass = useRef () ,
  _pseudo = useRef ();

  return (

    <View style = { InpFieldStyle.countainer }>

      <PickCat 
      
        { ...props } 
        index = { 1 }
      
      />

      <InputComp
        
        ref = { _pseudo}
        value = { props.pseudo }
        onChangeText = { props.setPseudo }
        placeHolder = "Donnez un nom a votre boutique"
        index = { 2 }
        onSubmitEditing = { _ => _firstName.current.focus () }
        
      />

      <InputComp
      
        ref = { _firstName }
        value = { props.firstName }
        onChangeText = { props.setFirstName }
        placeHolder = "Nom"
        index = { 3 }
        onSubmitEditing = { _ => _lastName.current.focus () }
      
      />
      
      <InputComp
         
        ref = { _lastName }
        value = { props.lastName }
        onChangeText = { props.setLastName }
        placeHolder = "Prenom"
        index = { 4 }
        
        onSubmitEditing = { _ => _email.current.focus () }
      
      />
      
      <InputComp
      
        ref = { _email }
        value = { props.email }
        onChangeText = { props.setEmail }
        placeHolder = "email"
        index = { 5 }
        onSubmitEditing = { _ => _phone.current.focus () }
    
      />
    
      <InputComp
      
        ref = { _phone }
        value = { props.phone }
        onChangeText = { props.setPhone }
        placeHolder = "Telephone"
        index = { 6 }
        onSubmitEditing = { _ => _pass.current.focus () }
        np = { true }
      
      />
      
      <InputComp
        
        ref = { _pass }
        value = { props.pass }
        onChangeText = { props.setPass }
        placeHolder = "Mot de pass"
        index = { 7 }
        onSubmitEditing = { _ => Keyboard.dismiss () }
      
      />
      
      <View style = { InpFieldStyle.btnCount } > 

        <BtnReg

          someFunction = { _ => props.ToLogIn () }
          color = '#00d4ff9e'
          title = 'Se Connecter'
          index = { 8 }
        
        />

        <BtnReg

          someFunction = { _ => props.OnSubmitSignUp ( props ) }
          color = '#00ff409e'
          title = 'Valider'
          index = { 9 }

        />
    
      </View>
    

    </View>

  )
}

  

export default InpFields