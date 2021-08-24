import { 

  compose ,
  withReducer ,
  withHandlers ,
  lifecycle

 } from "recompose";



let actionReducer = ( actionNavToDo , action ) => {

  switch ( action.type )
  {
     
    case "BackBtnNav" : 
      return actionNavToDo = "backbtnnav"

    case "ToFavoris" :
      return actionNavToDo = "tofavoris"

    case "ToFavorisItem" :
      return actionNavToDo = "tofavorisitem"
    
    case "ToSearchShop" : 
      return actionNavToDo = "tosearchshop"

    case "ToSearchItem" : 
      return actionNavToDo = "tosearchitem"
    
    default :
      return actionNavToDo = "backbtnnav"

  }
    
}

let addReducer = withReducer ( 

  "actionNavToDo" ,
  "dispatch01" ,
  actionReducer ,
  "backbtnnav"

)

let addHandlers = withHandlers ( {

  ToFavoris: props => _ => props.dispatch01 ( { type: "ToFavoris" } ) ,
  ToFavorisItem: props => _ => props.dispatch01 ( { type: "ToFavorisItem" } ) ,
  ToSearchShop: props => _ => props.dispatch01 ( { type: "ToSearchShop"} ) ,
  ToSearchItem: props => _ => props.dispatch01 ( { type: "ToSearchItem" } )

})

let addlifeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }

})

export default HocNavMenu = compose (
  
  addReducer ,
  addHandlers ,
  addlifeCycle

)
