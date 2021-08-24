import React from "react";
import { 
    View
 } from "react-native";
 import { compose } from "recompose";
 import HocCHatIo from './HocChatIo/HocChatIo';
import ChatStyle from "./styles/styles";
import InpMess from "./components/input/inputMess";
import ChatTxt from "./components/chatTxt/chatTxt";
import CloseBtn from "./components/closeBtn/closeBtn";
// import { BtnChat } from "./components/btnChat/btnChat";


const ChatIo = props =>
    <View 
      style={ChatStyle.countainer}
    >
      {/* <BtnChat {...props}/> a revoir */} 
      <ChatTxt {...props}/>
      <InpMess {...props}/>
      <CloseBtn {...props}/>
      
    </View>

export default ChatComp = compose (
    HocCHatIo
)(ChatIo)