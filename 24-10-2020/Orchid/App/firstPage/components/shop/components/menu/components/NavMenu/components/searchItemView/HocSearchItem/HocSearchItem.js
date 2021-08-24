import { 

  compose ,
  withState ,
  withHandlers,
  lifecycle

} from "recompose";
import { searchitem } from "../funcsearchItem/funcsearchItem";

let addTextItem = withState (

  "textItemSearch" ,
  "setTextItemSearch" ,
  ""

)

let addHandlers = withHandlers ({

  searchItem: props => _ => searchitem ( props )
})

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () {
    
    return true

  }

})

export default HocSearchItem = compose (

  addTextItem ,
  addHandlers ,
  addLifeCycle

)