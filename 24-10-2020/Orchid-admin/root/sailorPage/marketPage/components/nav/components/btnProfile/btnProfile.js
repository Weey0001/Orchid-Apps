import React , { useRef } from "react"
import * as Animatable from "react-native-animatable"
import { 
  
  TouchableWithoutFeedback ,
  Text

} from "react-native"
import BtnProfileStyle from "./btnProfileStyle/btnProfileStyle"
import { BtnProfOnTouch } from "./btnprofilefunc/btnprofilefunc"

const BtnProfile = props => 
{

  let profilRef = useRef () 

  return (

    <Animatable.View
    
      useNativeDriver = { true }
      animation = 'rubberBand'
      duration = { 1000 }
      iterationCount = 'infinite'
      iterationDelay = { 2500 }
    
    >
      
      <TouchableWithoutFeedback onPress = { _ => BtnProfOnTouch ( profilRef , props ) } >
      
        <Animatable.View
      
          useNativeDriver = { true }
          ref = { profilRef }
        
        >
          
          <Animatable.Image
          
            useNativeDriver = { true }
            style = { BtnProfileStyle.img }
            animation = 'bounceIn'
            duration = { 500 }
            delay = { 500 }

            source = { 
              
              props.shopInfo.imgP ?

                { 
                  uri: 
                  
                    `${ 
                      
                      props.Api
                    
                    }/static/images/${ 
                      
                      props.shopInfo.shopId
                    
                    }/users/${ 
                      
                      props.shopInfo.imgP
                    
                    }win.jpg`
                
                }

                : require ( "./img/Koala.jpg" ) 
                    
            }



          />        

        </Animatable.View>

      </TouchableWithoutFeedback>

      <Text style = { BtnProfileStyle.titleProf } >

        { props.shopInfo.pseudo }

      </Text>

    </Animatable.View>

  )
}

  

export default BtnProfile