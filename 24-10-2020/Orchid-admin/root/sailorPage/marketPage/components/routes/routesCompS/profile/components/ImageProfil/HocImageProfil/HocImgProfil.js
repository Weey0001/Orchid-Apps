import { 

  compose ,
  withHandlers ,
  withProps

} from "recompose";
import { Source } from "../funcImgProfil/funcImgProfil";

let addProps = withProps ({ 
  
  InfoUser: props => props.shopInfo 

})

let addHandlers = withHandlers ({

  GetSource0 : props => _ => await Source ( props.InfoUser.imgP ,props.InfoUser.shopId , props.Api ) ,

  GetSource1 : props => _ => await Source (
    props.InfoUser.imgC , props.InfoUser.shopId , props.Api 
  )
  
})

export default compose (

  addProps ,
  addHandlers 

)