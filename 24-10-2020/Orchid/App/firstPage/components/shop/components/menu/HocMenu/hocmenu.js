import { 

  compose ,
  lifecycle ,
  withState ,
  withHandlers ,
  withReducer ,

} from "recompose" ;

import { 

  GetDataCat , 
  GetShopTypes , 
  GetTypesItems , 
  DeployItem ,
  DeployerShop ,

} from "./funcRecomp/func" ;

import { subscriptionfunc } from "./funcRecomp/funcHandleBack";

import { 

  BackHandler

} from "react-native";

import { 

  addFavoris , 
  rmvFav , 
  addFavorisItem , 
  rmvFavItem 

} from "./funcRecomp/funcfav";
import { findItemFav } from "../components/NavMenu/components/favItemlist/funcHocfindItemFav/funcHocfindItemFav";
import { findShopFav } from "../components/NavMenu/components/favShoplist/funcHocfafshoplist/funcShopFavList";
 


let dataCat = withState(

  "dataCat" ,
  "setDataCat" ,
  false

)

let dataShop = withState(

  "dataShop" ,
  "setDataShop" ,
  false

)

let dataType = withState(

  "datafromType" ,
  "setDatafromType" ,
  false

)

let dataDeployerShop = withState(

  "dataDeployerShop" ,
  "setDataDeployerShop" ,
  false

)

let dataDeloyerItem = withState(

  'dataDeployer' ,
  'setDataDeployer' ,
  false

)

let togglNavState = withState(

  'togglNav' ,
  'setTogglNav' ,
  false

)

let showTypes = withState(
  
  'showTypes',
  "setShowTypes",
  false

)

let addDataFindSHop = withState ( 

  "findedShop" ,
  "setFindedShop" ,
  []

)

let addDataFindItem = withState (

  "findedItem" ,
  "setFindedItem" ,
  []
)

let searchTextShopFav = withState (

  "searchTextShopFav" ,
  "setSearchTextShopFav" ,
  ""

)

let findedFavShop = withState (

  "findedShopFav" ,
  "setFindedShopFav" ,
  []

)

let searchTextItemFav = withState ( 

  "searchTextItemFav" ,
  "setSearchTextItemFav" ,
  ""

)

let findedFavItem = withState ( 

  "findedFavItem" ,
  "setFindedFavItem" ,
  []

)

let actionReducer = ( actionMenuToDo , action ) => {

  switch ( action.type ) {

    case "ToShopCat":
      return actionMenuToDo = "toshopcat"

    case "ToDeployerShop":
      return actionMenuToDo = "todeployershop"

    case "ToShopView":
      return actionMenuToDo="toshopview"

    case "ToTypeView":
      return actionMenuToDo="totypeview"

    case "ToItemView":
      return actionMenuToDo="toitemview"

    case "ToItemDeployer":
      return actionMenuToDo='toitemdeployer'

    case "ToFilterSearch":
      return actionMenuToDo='tofiltersearch'

    default:
      return actionMenuToDo="toshopcat"
   
  }
}

let add0Handlers = withHandlers({

  ToShopCat: porps => _ => porps.dispatch ( { type: 'ToShopCat' } ) ,
  ToDeployerShop: props => _ => props.dispatch ( { type: "ToDeployerShop" } ) ,
  ToShopView: props => _ => props.dispatch ( { type: "ToShopView" } ) ,
  ToTypeView: props => _ => props.dispatch ( { type: "ToTypeView" } ) ,
  ToItemView: props => _ => props.dispatch ( { type: "ToItemView" } ) ,
  ToItemDeployer: props => _ => props.dispatch ( { type: 'ToItemDeployer' } ) ,
  ToFilterSearch: props => _ => props.dispatch ( { type: 'ToFilterSearch' } ) ,
  findCat: props => ( someprops , datatouse ) => GetDataCat ( someprops , datatouse ) ,
  shopdeployer: props => ( someprops , datatouse ) => DeployerShop ( someprops , datatouse ) ,
  findShop: props => ( someprops , datatouse ) => GetShopTypes ( someprops , datatouse ) ,
  findType: props => ( someprops , datatouse ) => GetTypesItems ( someprops , datatouse ) ,
  itemdeployed: props => ( someprops , datatouse )=> DeployItem ( someprops , datatouse ) ,
  togglnavInt: props => _ => props.setTogglNav ( !props.togglNav ) ,
  addToFav: props => ( someprops , datatouse ) => addFavoris ( someprops , datatouse ) ,
  rmvfromFav: props => ( someprops , datatouse ) => rmvFav ( someprops , datatouse ) , 
  addToFavItem: props => ( someprops , datatouse ) => addFavorisItem ( someprops , datatouse) ,
  rmvfromfavitem: props => ( someprops , datatouse ) => rmvFavItem ( someprops , datatouse ) ,
  FindItemFav: props => ( someprops , datatouse ) => findItemFav ( someprops , datatouse ) ,
  FindShopFav: props => ( someprops , datatouse) => findShopFav ( someprops , datatouse )

})

let addReducer0 = withReducer(

  "actionMenuToDo" ,
  "dispatch" ,
  actionReducer ,
  "toshopcat"

)

let subscription = props => BackHandler.addEventListener(

  "hardwareBackPress" ,
  () => {
    subscriptionfunc ( props )
    return true
  }
  

)

let unSubscribe = _ => BackHandler.removeEventListener( "hardwareBackPress")



let addlifecyles = lifecycle({

  componentDidMount () {
    
    subscription ( this.props )
    // unSubscribe()

  } ,
  
  shouldComponentUpdate () {

    return true

  } ,

  componentDidUpdate () {

    subscription ( this.props )

  } ,

  componentWillUnmount () {

    unSubscribe()

  }

})


export default compose(
  
  dataCat ,
  dataDeployerShop ,
  dataShop ,
  dataType ,
  dataDeloyerItem ,
  addDataFindSHop ,
  addDataFindItem ,
  searchTextShopFav,
  findedFavShop ,
  searchTextItemFav ,
  findedFavItem ,
  togglNavState ,
  showTypes ,   
  addReducer0 ,   
  add0Handlers , 
  addlifecyles ,

)
