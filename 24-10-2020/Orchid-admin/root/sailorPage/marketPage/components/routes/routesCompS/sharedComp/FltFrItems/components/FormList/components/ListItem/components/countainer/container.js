import React , { useRef } from "react";
import ContStyle from "./contStyle/contStyle";

const ContainerListItem = props =>
  
{

  let containerRef = useRef ()

  return (

    <Animatable.View

      useNativeDriver = { true } 
      style = { ContStyle.container }
      ref = { containerRef } 
      animation = 'bounceIn'
      duration = { 1000 }
      delay = { props.index * 100 } 

    >

      <TouchableWithoutFeedback
        onPress = { _ => props.ListItemTouch ( containerRef ) }
      >
        <Animatable.View

          useNativeDriver = { true }
          animation = 'pulse'
          duration = { props.itemData.promotion ? 500 : 2000 }
          iterationCount = 'infinite'
          iterationDelay = { 2000 }
          delay = { props.index * 100 }
          style = { ContStyle.twF }

        >

          { props.children }

        </Animatable.View>
      </TouchableWithoutFeedback>
    </Animatable.View>

  )

}

export default ContainerListItem