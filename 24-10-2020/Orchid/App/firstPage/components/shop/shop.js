import React from 'react'
import { View, Text } from 'react-native'
import HOCshop from './hocShop/hocshop';
import { compose } from "recompose";
import ChatComp from './components/chatIo/chatIo';
import StyleChat from './styles/styles/styles';
import OpenBtn from './components/chatIo/components/closeBtn/closeBtn';
import { Menu } from './components/menu/menu';

const Shop = (props) => {
  return (
    <View style={StyleChat.countainer}>
      <Menu {...props}/>
      {props.isChat&&<ChatComp {...props}/>}
      {!props.isChat&&<OpenBtn {...props}/>}
    </View>
  )
}

export default compose(
  HOCshop
)(Shop)