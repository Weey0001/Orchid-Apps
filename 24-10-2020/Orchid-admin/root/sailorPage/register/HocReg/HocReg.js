import { 
  
  compose ,
  withReducer ,
  withHandlers ,
  withState ,
  lifecycle

} from "recompose";

import { 

  onSubmitData , 
  toCheckEmail 

} from "../funcReg/funcReg";

import { 

  SuccesSign , 
  Failed , 
  SuccesLog, 
  createUserFile

} from "../funcReg/allfuncReg/allFuncReg";

let CatPicker = withState (

  "choosedCat" ,
  "setChoosedCat" ,
  false

)

let Pseudo = withState ( 

  "pseudo" ,
  "setPseudo" ,
  "Wee"

)

let FirstName = withState (

  "firstName" ,
  "setFirstName" ,
  "Aina"

)

let LastName = withState ( 

  "lastName" ,
  "setLastName" ,
  "Andrianantara"

)

let Email = withState (

  "email" ,
  "setEmail" ,
  "weedy1aina@gmail.com"

)

let Phone = withState (

  "phone" ,
  "setPhone" ,
  "0326005547"

)

let Pass = withState (

  "pass" ,
  "setPass" ,
  "Andrianantara"
  
)



let actionReducer = ( actionReg , action ) => {

  switch ( action.type ) {
    
    case "ToSignUp" :
      return actionReg = 'toSignUp'

    case "ToLogIn" :
      return actionReg = 'toLogIn'
    
    default :
      return actionReg = "toSignUp"
    
  }

}

let addReducer = withReducer (

  "actionReg" ,
  "dispatch" ,
  actionReducer ,
  "toSignUp"

)

let addHandlers = withHandlers({

  ToSignUp: props => _ => props.dispatch ( { type: "ToSignUp" } ) ,
  ToLogIn: props => _ => props.dispatch ( { type: "ToLogIn" } ) ,
  OnSubmitSignUp: _ => someprops => onSubmitData ( someprops ) ,
  SuccesSignInput: _ => someprops => SuccesSign ( someprops ) ,
  FailedTest: _ => txt => Failed ( txt ) ,
  OnSubmitLogIn: _ => someprops => toCheckEmail ( someprops ) ,
  SuccesLogInfo: props => _ => SuccesLog ( props ) ,

})

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true
  }
})

export default compose ( 

  CatPicker ,
  Pseudo ,
  FirstName ,
  LastName ,
  Email ,
  Phone ,
  Pass ,
  addReducer ,
  addHandlers ,
  addLifeCycle ,

)