import React,{useRef} from "react";
import { View, Keyboard,Button} from "react-native";
import InpCountStyle from "./styles/styles";
import { Inpfield } from "./components/inpfield";

const Inpfields = props =>{

  let name = useRef(),
  nickname = useRef(),
  societe = useRef(),
  email = useRef(),
  address = useRef(),
  cin = useRef(),
  tel = useRef()

  return( 

    <View style = {InpCountStyle.countainer}>
      <Inpfield
        pl="name"
        ref={name}
        onendedit={()=>{
          nickname.current.focus()
        }}
        onchTxt={props.setName}
      />
      <Inpfield
        pl="nickname"
        ref={nickname}
        onendedit={()=>{
          societe.current.focus()
        }}
        onchTxt={props.setNickname}
      />
      <Inpfield
        pl="societe"
        ref={societe}
        onendedit={()=>{
          email.current.focus()
        }}
        onchTxt={props.setSocity}
      />
      <Inpfield
        pl="email"
        ref={email}
        onendedit={()=>{
          address.current.focus()
        }}
        onchTxt={props.setEmail}
      />
      <Inpfield
        pl="address"
        ref={address}
        onendedit={()=>{
          cin.current.focus()
        }}
        onchTxt={props.setAddress}
      />
      <Inpfield
        pl="CIN"
        ref={cin}
        onendedit={()=>{
          tel.current.focus()
        }}
        onchTxt={props.setCin}
      />
      <Inpfield
        pl="tel"
        ref={tel}
        onendedit={()=>{
          Keyboard.dismiss()
        }}
        onchTxt={props.setTel}
      />
    </View>
  )
}

  export default Inpfields