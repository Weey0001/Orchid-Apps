import { 
  compose,
  withState,
  lifecycle
 } from "recompose";
import { GetDataTypeItemFlat } from "../funcflat/funcflat";

let dataTypeItemState = withState(
  "dataFlatTypeItem",
  "setDataFlatTypeItem",
  false
  )

let flatlifecycle = lifecycle({
  componentDidMount(){

    GetDataTypeItemFlat(this.props)

  },
  shouldComponentUpdate(){
    return true
  },
  componentDidUpdate(){
    console.log("TestcomponentUp: ",this.props.dataFlatTypeItem )
  }
})

export const HocFlatItemType = compose(
  dataTypeItemState,
  flatlifecycle
)