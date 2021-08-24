import React from 'react'
import { Picker ,Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import PickCatStyle from './pickCatStyle/pickCatStyle'

const PickCat = props =>

  <Animatable.View 

    style = { PickCatStyle.countainer }
    useNativeDriver = { true }
    duration = { 800 }
    animation = 'flipInY'
    delay = { props.index * 100 + 500 }

  >
    <Animatable.View

      useNativeDriver = { true }
      iterationDelay = { 2000 }
      duration = { 500 }
      animation = 'pulse'
      iterationCount = 'infinite'

    >
      
      <Picker
        
        selectedValue = { props.choosedCat }
        onValueChange = {

          ( itemValue , itemIndex ) => props.setChoosedCat( itemValue )
        
        }
        mode = "dialog"
        enabled = { true }
        style = { PickCatStyle.pic }

      >
        <Picker.Item

          label = "Categorie"
          value = 'Categorie'
          
        />

        { 

          props.shopCat
          &&
          props.shopCat.map (
        
            ( { _id , ShopCat } ) =>

              <Picker.Item
               
                key = { _id }
                label = { ShopCat } 
                value = { _id } 
              
              />

          )

        }

      </Picker>

    </Animatable.View>
    
  </Animatable.View>
  
export default PickCat