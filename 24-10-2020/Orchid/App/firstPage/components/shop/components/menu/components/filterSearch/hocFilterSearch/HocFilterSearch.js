import { 
  compose,
  withState,
  lifecycle
 } from "recompose";

let dataFromFilter = withState('dataFilter','setDataFilter',false)

let addlifecyle = lifecycle({
  componentDidMount(){
    console.log("FilterPage")
  },
  shouldComponentUpdate(){
    return true
  }
})


export default HocFilterSearch = compose(
  dataFromFilter,
  addlifecyle
)