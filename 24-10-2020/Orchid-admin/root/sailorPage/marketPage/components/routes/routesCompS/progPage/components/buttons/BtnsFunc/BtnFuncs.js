import * as Communications from "react-native-communications";

export const SendMail = _ => 
 
  Communications.email (

    [ "weedy1aina@gmail.com" ] ,
    null ,
    null ,
    null ,
    null

  )

export const PhoneCall = _ => 

  Communications.phonecall ( '0322631774' , true )