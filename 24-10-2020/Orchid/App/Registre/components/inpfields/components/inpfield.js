import React , { forwardRef } from "react";
import { 
  View,
  TextInput
 } from "react-native";
import styles from "./styles";

export const Inpfield = forwardRef(({pl,onendedit,onchTxt},ref)=>
  <View style={styles.countainer}>
    <TextInput 
      placeholder={pl} 
      ref={ref}
      style={styles.inp}
      onEndEditing={onendedit}
      onChangeText={txt => onchTxt(txt)}
      
    />
  </View>
)