import { 
  
  compose ,
  withHandlers ,
  lifecycle ,
  withState

} from "recompose";
import { Delete , ListItemTouch, PromToggle } from "../components/funcAnim/funcAnim";
import { GetBoolPorm } from "../funcFormList/funcFormList";

let addPromState = WithState ( 

  "isProm" ,
  "setProm" ,
  false

)

let addHandlers = withHandlers ({

  Delete: _ => ( someprops ) => Delete ( someprops ) ,
  ListItemTouch: _ => ( someprops , ref ) => ListItemTouch ( someprops , ref ) ,
  PromToggle: props => bool => PromToggle ( props , bool ) ,
  GetPromBool: props => _ => GetBoolPorm ( props )

})

let addLifeCycle = lifecycle ({

  async componentDidMount () {

    await GetBoolPorm ( this.props )

  } ,

  shouldComponentUpdate () {

    return true

  }

})

export default compose ( 
  
  addPromState ,
  addHandlers ,
  addLifeCycle

)