import { 
  
  compose ,
  withHandlers

} from "recompose";
import { SendMail, PhoneCall } from "../BtnsFunc/BtnFuncs";

let addHandlers = withHandlers ({

  SendMail: _ => _ => SendMail () ,
  PhoneCall: _ => _ => PhoneCall ()
  
})

export default compose (

  addHandlers

)