import React , { useRef } from "react";
import * as Animatable from "react-native-animatable";
import { TouchableWithoutFeedback } from "react-native";
import { SourceImg, OnPressToolTip } from "./funcToolTip/funcToolTip";
import ToolTipStyle from "./ToolTipStyle/ToolTipStyle";

const ToolTip = props => {

  let changeRef = useRef()

  return (

    <Animatable.View

      useNativeDriver = { true }
      style = { ToolTipStyle.container }
      animation = 'bounceIn'
      duration = { 500 }
      delay = { 500 }

    >

      <Animatable.View

        useNativeDriver = { true }
        ref = { changeRef }
        style = { ToolTipStyle.contTWF }

      >

        <TouchableWithoutFeedback

          onPress = { _ => OnPressToolTip ( props , changeRef ) }

        >

          <Animatable.Image

            style = { ToolTipStyle.inImg }
            useNativeDriver = { true }
            animation = 'bounceIn'
            duration = { 500 }
            delay = { 500 }
            source = { SourceImg ( props ) }

          />

        </TouchableWithoutFeedback>
        
      </Animatable.View>

    </Animatable.View>

  )
}

export default ToolTip