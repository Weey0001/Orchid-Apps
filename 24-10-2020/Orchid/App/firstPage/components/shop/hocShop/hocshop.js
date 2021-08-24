import {

  compose ,
  lifecycle ,
  withState ,
  withHandlers

} from 'recompose';

let intChat = withState(
  
  
  "isChat" ,
  "setChat" ,
  false
  
)

let intChatHandlers = withHandlers({

  ToggleChat: props => _ => props.setChat( !props.isChat )

})

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }
  
})

export default HOCshop = compose (

  addLifeCycle ,
  intChat ,
  intChatHandlers

)