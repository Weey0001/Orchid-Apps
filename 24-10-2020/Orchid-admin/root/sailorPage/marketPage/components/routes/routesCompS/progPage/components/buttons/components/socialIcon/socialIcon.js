import SocialIconStyle from "./socialIconStyle/socialIconStyle"
import { OnSocialTouch } from "./SocialIconAnim/SocialIconAnim"

const SocialIcon = props => {

  let iconRef = useRef ()

  return (

    <Animatable.View
      useNativeDriver = { true }
      ref = { iconRef }
    >
      <TouchableWithoutFeedback
        onPress = { _ => OnSocialTouch ( iconRef , props ) }
      >
        <Animatable.Image

          source = { props.source }
          style = { SocialIconStyle.img }
          useNativeDriver = { true }
          animation = { props.animation }
          duration = { props.duration }
          iterationCount = 'infinite'

        />
      </TouchableWithoutFeedback>

    </Animatable.View>
    
  )
}

export default SocialIcon