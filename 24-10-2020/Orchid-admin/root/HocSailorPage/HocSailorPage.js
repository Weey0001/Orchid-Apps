import { 
  
  compose , 
  withState ,
  lifecycle ,
  withHandlers ,
  withReducer

} from "recompose";
import { getShopCatData } from "../funcSailorPage/FuncSailorPage";
import { createUserFile } from "../sailorPage/register/funcReg/allfuncReg/allFuncReg";

let ShopCat = withState ( 

  "shopCat" ,
  "setShopCat" ,
  []

)

let Items = withState ( 

  "items" ,
  "setItems" ,
  []

) 

let Types = withState ( 

  "types" ,
  "setTypes" ,
  []

)

let Api = withState (

  "Api" ,
  "setApi" ,
  "http://192.168.1.2:5000"

)

let ShopInfo = withState (

  "shopInfo" ,
  "setShopInfo" ,
  false

)

let ShowModal = withState (

  "isModal" ,
  "setModal" ,
  false

)

let actionReducer = ( actionNav , action ) => {

  switch ( action.type ) {

    case "waitscreen" :
      return actionNav = "waitscreen"
    
    case "register" :
      return actionNav = "register"
    
    case "market" :
      return actionNav = "market"
  
    default:
      return actionNav = "waitscreen"

  }

}

let addReducer = withReducer (

  "actionNav" ,
  "dispatch" ,
  actionReducer ,
  "waitscreen"

)

let addHandlers = withHandlers (
  
  {

    ToWaitScreen: props => _ => props.dispatch ( { type: "waitscreen" } ) ,
    ToRegister: props => _ => props.dispatch ( { type: "register" } ) ,
    ToMarket: props => _ => props.dispatch ( { type: "market" } ) ,
    ToggleModal: props => _ => props.setModal ( !props.isModal ) ,
    CreateUserProfile: _ => someprops => createUserFile ( someprops ) ,
    GetShopCatData: _ => someprops => getShopCatData ( someprops )

  }

)

let Lifecycle = lifecycle ({

  componentDidMount () {

    this.props.GetShopCatData ( this.props )
    // getShopCatData ( this.props )

  } ,

  shouldComponentUpdate () {

    return true

  } ,

  componentDidUpdate ( prev ) {

    if ( prev.shopInfo !== this.props.shopInfo )
    {

      this.props.CreateUserProfile ( this.props )

    } 
    // else if ( this.props.items !== [] && this.props.types !== [] ) 
    // {

    //   this.props.ToMarket ()
    
    // }

  }

})

export default compose ( 

  ShopCat ,
  ShowModal ,
  Items ,
  Types ,
  Api ,
  ShopInfo ,
  addReducer ,
  addHandlers , 
  Lifecycle

) 