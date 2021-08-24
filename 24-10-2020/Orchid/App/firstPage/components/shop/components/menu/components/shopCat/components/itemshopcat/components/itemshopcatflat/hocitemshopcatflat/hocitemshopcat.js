import { 

  compose ,
  withState ,
  lifecycle 

} from "recompose";
import { GetAllShopFromSpeCat } from "../funcitemshopcat/funcshopcatitem";

let dataSpeCat = withState(

  "dataSpeCat" ,
  "setDataSpeCat" ,
  false

)

let addLifeCycle = lifecycle(

  {

    async componentDidMount () {
      
      try {
        
        if ( this.props.dataSpeCat === false)
        {

          await GetAllShopFromSpeCat( this.props )  

        }        

      } catch ( error ) {
        
        alert( error )

      }


    } ,

    shouldComponentUpdate () {

      return true

    } 

  }

)

export default compose (

  dataSpeCat,
  addLifeCycle

)