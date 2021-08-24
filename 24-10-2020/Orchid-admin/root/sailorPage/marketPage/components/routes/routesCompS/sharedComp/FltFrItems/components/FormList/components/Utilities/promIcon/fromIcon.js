import * as Animatable from "react-native";
import PromIconStyle from "./promIconStyle/promIconStyle";

const PromIcon = props => 

  <Animatable.View

    useNativeDriver = { true }
    animation = 'bounceIn'
    duration = { 1000 }
    style = { PromIconStyle.container }

  >
    <Animatable.View

      useNativeDriver = { true }
      animation = 'swing'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 2000 }
      delay ={ props.index * 300 }

    >

      <Text style = { PromIconStyle.txt } >

        Solde

      </Text>     

    </Animatable.View>

  </Animatable.View>


export default PromIcon