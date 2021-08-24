import { compose, lifecycle } from "recompose";
import { awakeStartFunctions } from "../funcWaitScreen/funcwaitscreen";

let addLifecycle = lifecycle ({

  componentDidMount () {

    //add start action befor Registered data function
    awakeStartFunctions ( this.props )

  } ,

  shouldComponentUpdate () {

    return true

  }
  
})

export default compose (

  addLifecycle

)