import {

  lifecycle ,
  compose ,
  withState ,

} from 'recompose' ;

import { checkIntData } from './allFunc/allfunc';
import { connections } from '../../config/connections/connections';

let addState = withState(
  
  'isOn' ,
  'setOn' ,
  false

)

let addState0 = withState(

  'isOrg' ,
  'setOrg' , 
  false
  
)

let addLifecycle = lifecycle({

  componentDidMount () {

    if ( this.props.dataShopCat === false)
    {
      
      checkIntData ( this.props )

    }

  } ,

  shouldComponentUpdate () {

    return true

  } ,

  async componentDidUpdate () {

    if ( this.props.dataShopCat !== false)
    {

      await connections ( this.props )
      
    }

  }

})

export default HOCwait = compose(
  
  addState ,
  addState0 ,
  addLifecycle

)



