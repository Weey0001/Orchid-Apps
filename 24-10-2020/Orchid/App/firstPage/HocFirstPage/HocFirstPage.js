import {

  compose ,
  withState ,
  withHandlers ,
  withReducer,
  lifecycle

} from 'recompose' ; 
import { CreateFavDir } from '../funcHocFirstP/funcHoc';

let addState = withState(

  'isWait' ,
  'setWait' ,
  true
  
)
let addState1 = withState(
  
  'onerror' ,
  'setError' ,
  false

)

let dataShopCat = withState( 
  
  'dataShopCat' , 
  'setDataShopCat' , 
  false 

)

let dataFav = withState ( 

  "dataFav" ,
  "setDataFav" ,
  false

)

let dataFavItem = withState (

  "dataFavItem" ,
  "setDataFavItem" ,
  false

)


let actionReducer = ( actionToDo , action ) => {
  switch ( action.type ) {

    case 'ToShop':
      return actionToDo = "toShop"

    case 'Loading':
      return actionToDo = "wait"

  }
}

let actionReducer1 = ( actionText , action ) => {
  switch ( action.type ) {

    case "email":
      return actionText = "Email deja Utiliser"

    case "phone":
      return actionText = "Numero de telephone deja utiliser"

    case "connectionErr":
      return actionText = "Erreur de connection"

    case "entrieErr":
      return actionText = "Completez tous les champs"

    case "emphErr":
      return actionText = "Email et/ou numero et/ou pass de telephone non valide"

    case "logErr":
      return actionText = "Vos donnees sont incorrects !"

    default:
      return actionText = "erreur"

  }
}

let addHandlers = withHandlers({
  ToShop: props => _ => props.dispatch({ type: 'ToShop' }) ,
  errEmail: props => _  => props.dispatch1({ type: 'email' }) ,
  errPhone: props => _  => props.dispatch1({ type: 'phone' }) ,
  errConnection: props => _  => props.dispatch1({ type: 'connectionErr' }) ,
  errEntrie: props => _  => props.dispatch1({ type: 'entrieErr' }) ,
  errEmph: props=> _ => props.dispatch1({ type: 'emphErr' }) ,
  errLog: props => _  => props.dispatch1({ type: 'logErr '} )
})

let addReducer = withReducer(

  'actionToDo' ,
  'dispatch' ,
  actionReducer ,
  'wait'

)

let addReducer1 = withReducer(

  'actionText' ,
  'dispatch1' ,
  actionReducer1 ,
  'error'

)

let addLifeCycle = lifecycle(
  {

    componentDidMount () {

      CreateFavDir ( this.props )

    } ,

    shouldComponentUpdate () {

      return true

    } 
    
  }
)



export default HocFirstPage = compose(

  addState ,
  addState1 ,
  dataShopCat ,
  dataFav ,
  dataFavItem ,
  addLifeCycle ,
  addReducer ,
  addReducer1 ,
  addHandlers ,
  
)

