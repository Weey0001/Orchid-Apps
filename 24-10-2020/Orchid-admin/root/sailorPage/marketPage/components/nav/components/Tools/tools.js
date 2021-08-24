import React , { useRef } from "react";
import ToolsStyle from "./toolsStyle/toolsStyle";
import { OnToolsTouch } from "./ToolsAnim/ToolsAnim";

const Tools = props => {
  
  let ImgRef = useRef()

  return (

    <View>

      <Animatable.View

        useNativeDriver = { true }
        animation = { props.animation }
        duration = { props.duration }
        iterationCount = { props.iterationCount }
        iterationDelay = { props.iterationDelay }
      
      >
        <Animatable.View

          style = { ToolsStyle.countTo }
          useNativeDriver = { true } 
          animation = "bounceIn"
          duration = { 500 }
          delay = { 200 * props.delaycount }

        >
          <TouchableWithoutFeedback  onPress = { _ => OnToolsTouch ( ImgRef , props ) } >

            <Animatable.Image

              useNativeDriver = { true }
              animation = 'bounceIn'
              source = { props.source}
              style = { ToolsStyle.img }
              ref = { ImgRef }

            />

          </TouchableWithoutFeedback>

        </Animatable.View> 
      
      </Animatable.View>

      <Text style = { ToolsStyle.title } >

        { props.somekey }
      
      </Text>    
    
    </View>

  )
}

export default Tools