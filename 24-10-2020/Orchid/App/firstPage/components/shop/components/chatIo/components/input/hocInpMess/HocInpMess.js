import { 
  compose,
  withState,
  lifecycle,
  withHandlers
 } from "recompose";
import { animSendBtn } from "../sendBtn/styles/anim";

 let addHandlers = withHandlers({
   sendMess: props => ref => {
     animSendBtn(ref)
   }
 })

 export default HocInpMess = compose(
   addHandlers
 )