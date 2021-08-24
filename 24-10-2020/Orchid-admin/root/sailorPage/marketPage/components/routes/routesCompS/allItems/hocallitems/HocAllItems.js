import { 

  compose ,
  withState ,
  lifecycle

} from "recompose";

let addRenameProps = renameProps (

  "items" , 
  "usedData"

)

let addLifeCyle = lifecycle ({

  shouldComponentUpdate () 

  {

    return true

  }

})

export default compose ( 

  addRenameProps ,
  addLifeCyle

)