import { 
  
  compose, 
  lifecycle, 
  withState,
  withHandlers,
  withReducer

} from "recompose";

let allItems = withState ( 

  "isAllItems" ,
  "setIsAllItems" ,
  false

)

let actionReducer = ( actionMarket , action ) => {
  switch ( action.type ) {

    case "ProgPage": 
    return actionMarket = "progPage"

    case "allItems":
      return actionMarket = "allItems"
    
    case "addItem": 
      return actionMarket = "addItems"
    
    case "addForm":
      return actionMarket = "addForm"
    
    case "showItem":
      return actionMarket = "showItem"
    
    case "details":
      return actionMarket = "details"
    
    case "edit" :
      return actionMarket = "edit"
    
    case "search" :
      return actionMarket = "search"

    case "profile" :
      return actionMarket = "profile"
  
    default:
      return actionMarket = "progPage"
  }
}

let addReducer = withReducer (

  "actionMarket" ,
  "dispatch" ,
  actionReducer ,
  "progPage"

)

let addHandlers = withHandlers ({

  ToProgPage : props => _ => props.dispatch ( { type: "ProgPage" } ) ,
  ToDetails: props => _ => props.dispatch ( { type: "details" } ) ,
  ToEdit: props => _ => props.dispatch ( { type: "edit" } ) ,
  ToShowItem: props => _ => props.dispatch ( { type: "showItem" }) ,
  ToAllItems: props => _ => props.dispatch ( { type: "allItems" } ) ,
  ToAddItems: props => _ => props.dispatch ( { type: "addItems" } ) ,
  ToAddForm: props => _ => props.dispatch ( { type: "addForm" } ) ,
  ToSearch: props => _ => props.dispatch ( { type: 'search' } ) ,
  ToProfile: props => _ => props.dispatch ( { type: "profile" } )

})

let addLifecycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  }

})

export default compose (
  
  allItems ,
  addReducer ,
  addHandlers ,
  addLifecycle

)