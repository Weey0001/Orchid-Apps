import React from "react";
import TitleLogStyle from "./TitleLogStyle/TitelLogStyle";
import * as Animatable from "react-native-animatable";

import { 

  View ,
  Text

} from "react-native";

const TitleLog = _ => 

  <Animatable.View

    useNativeDriver = { true }
    animation = "bounceIn"
    duration = { 800 }
    delay = { 500 }
  
  >
  
    <Animatable.View
  
      useNativeDriver = { true }
      animation = 'swing'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 3000 }
      style = { TitleLogStyle.TxtCount }
    
    >
    
      <View style = { TitleLogStyle.countTxtView }>
    
        <Text style = { TitleLogStyle.txt1 } >
          Log 
        </Text>  

        <Text style = { TitleLogStyle.txt2 } >
          In
        </Text>   

      </View>

    </Animatable.View>
    
  </Animatable.View>

export default TitleLog