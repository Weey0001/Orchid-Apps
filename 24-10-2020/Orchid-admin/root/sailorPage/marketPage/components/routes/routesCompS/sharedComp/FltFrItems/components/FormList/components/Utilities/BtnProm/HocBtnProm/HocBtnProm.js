import React from "react";
import { 

  compose ,
  withHandlers ,
  lifecycle ,
  withReducer 
 
} from "recompose";
import { GetBoolPorm } from "../../../../funcFormList/funcFormList";

let actionReducer = ( actionProm , action ) => {

  switch ( action.type ) {
    case "Loading":
    
      return actionProm = "loading"
    case "Active":
      return actionProm = "active"

    case "Inactive":
      return actionProm = "inactive"
    
    default:
      return actionProm = "loading"

  }

}

let addReducer = withReducer (

  "actionProm" ,
  "dispatch" ,
  actionReducer ,
  "loading"

)

let addHandlers = withHandlers ({
  
  Loading: props => props.dispatch ( { type: "Loading" } ) ,
  Active: props => props.dispatch ( { type: "Active" } ) ,
  Inative: props => props.dispatch ( { type: "Inactive" } )


})

let addLifeCycle = lifecycle ( {

  componentDidMount () {

    GetBoolPorm ( this.props )

  } ,

  shouldComponentUpdate () {
    
    return true 

  }

})

export default compose ( 

  addReducer ,
  addHandlers ,
  addLifeCycle

)