import { 

  compose ,
  withState ,
  withHandlers ,
  lifecycle

} from "recompose";

let toggleFormList = withState ( 

  "toggleFormList" ,
  "setToggleFormList" ,
  1

)

// let addUsedData = withState ( 

//   "usedData" ,
//   "setUsedData" ,
//   false

// )

let addHandlers = withHandlers ({

  ToList: props => _ => props.setToggleFormList ( 2 ) ,
  ToItem: props => _ => props.setToggleFormList ( 1 )

})

let addLifeCycle = lifecycle ({

  // componentDidMount () {

  //   // FiltredData ( this.props )

  // } ,

  shouldComponentUpdate () {

    return true

  }

})

export default compose (

  toggleFormList , 
  // addUsedData ,
  addHandlers ,
  addLifeCycle

)