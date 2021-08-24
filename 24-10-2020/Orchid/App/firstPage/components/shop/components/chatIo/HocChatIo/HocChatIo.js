import { 
    compose,
    lifecycle,
    withState,
    withHandlers,
    withStateHandlers
 } from "recompose";

import { socketConnection } from "./funHoc/socketConnection";
import { ToChat } from "./funHoc/funHoc";

 let addState = withState('msg','setMsg',[])

 let addlifecycle = lifecycle({
     componentDidMount(){
       socketConnection(this.props)
     },
     shouldComponentUpdate(){
       return true
     }
 })

 let addHandlers = withHandlers({
   ToChat: props => () => ToChat()
 })

 export default compose(
   addState,
   addlifecycle,
   addHandlers
 )