import { 
  compose,
  withState,
  lifecycle,
  withHandlers
 } from "recompose";
import { addClient } from "../func/func";


 let addName = withState('name',"setName",''),
 addNickname = withState('nickname','setNickname',''),
 addSocity = withState('socity','setSocity',''),
 addEmail = withState('email','setEmail',''),
 addAddress = withState('address','setAddress',''),
 addCin = withState('cin',"setCin",''),
 addTel = withState('tel','setTel',''),
 addHandlers = withHandlers({
   newClient: props => _ => addClient(props)
 })


 export default compose(
   addName,
   addNickname,
   addSocity,
   addEmail,
   addAddress,
   addCin,
   addTel,
   addHandlers
 )