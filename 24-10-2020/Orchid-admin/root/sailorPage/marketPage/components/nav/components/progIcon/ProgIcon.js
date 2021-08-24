import React , { useRef } from "react";
import * as Animatable from "react-native-animatable"
import ProgIconStyle from "./ProgIconStyle/progIconStyle";
import { OnTouch } from "./ProgIconAnimations/ProgIconAnim";

const IconProg = props => {

  let IconRef = useRef()

  return (

    <Animatable.View

      useNativeDriver = { true }
      ref = { IconRef }
      style = { ProgIconStyle.countainer }
    >
      <TouchableWithoutFeedback  onPress = { _ => OnTouch ( IconRef , props ) } >
        <View
          style = { ProgIconStyle.countImg }
        >
          <Animatable.Image

            useNativeDriver = { true }
            source = { require ( "./img/11.png" ) }
            style = { ProgIconStyle.img }
            animation = 'pulse'
            duration = { 500 }
            iterationCount = 'infinite'
            iterationDelay = { 2000 }

          />          
        </View>

      </TouchableWithoutFeedback>

      <Text style = { ProgIconStyle.txt } >
        ORCHID
      </Text>

    </Animatable.View>
  )
}

export default IconProg