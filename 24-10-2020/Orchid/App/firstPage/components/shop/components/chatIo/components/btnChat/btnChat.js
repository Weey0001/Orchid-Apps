import React, { useRef } from "react";
import * as Animatable from 'react-native-animatable';
import { BtnChatStyles } from "./styles/styles";
import { AnmCntainer } from "./funcS/funcS";
import { 
  Button
 } from "react-native";


export const BtnChat = props => 
  {
    let cntRef = useRef()

    return(
      <Animatable.View
        useNativeDriver={true}
        animation="bounceIn"
        duration={1000}
        delay={500}
        style={{
          ...BtnChatStyles.countainer
        }}
        ref={cntRef}
      >
        <Button color="#1fff1f8f" title="button" onPress={
          ( )=> AnmCntainer(props,cntRef)
        } />

      </Animatable.View>
    )
  }