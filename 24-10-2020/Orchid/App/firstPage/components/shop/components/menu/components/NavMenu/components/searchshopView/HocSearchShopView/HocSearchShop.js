import { 

  compose ,
  withState ,
  withHandlers ,
  lifecycle

} from "recompose";
import { searchShop } from "../funcsearcnshop/funcSeachShop";

let addTextToSearch = withState (

  "textSearchShop" ,
  "setTextSearchShop" ,
  ""

)



let addhandlers = withHandlers({

  SearchShop: props => _ => searchShop ( props )

})

let addLifeCycle = lifecycle ({

  shouldComponentUpdate () {

    return true

  } 

})

export default HocSeachShop = compose (

  addTextToSearch ,
  addhandlers ,
  addLifeCycle

)