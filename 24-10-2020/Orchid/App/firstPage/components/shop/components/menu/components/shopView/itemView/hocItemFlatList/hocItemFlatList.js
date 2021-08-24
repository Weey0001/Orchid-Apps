import { 

  compose , 
  lifecycle,
  withState

 } from "recompose";
import { GetItemFromSpeShop } from "../functions/funcFlatItemView";

let dataitemShoplist = withState ( 

  "dataitemShopList" ,
  "setDataItemShopList" ,
  false

)

let addLifeCycle = lifecycle ( {

  async componentDidMount () {

    await GetItemFromSpeShop ( this.props )

  } ,

  shouldComponentUpdate () {
    return true
  }

})

export default compose ( 

  dataitemShoplist ,
  addLifeCycle

)