import axios from "axios";
import { Api } from "../../../../../../../../../config/connections/connections";

export const GetDataTypeItemFlat = async props => {
  try {
    
    let result = await axios(Api+'/items/foundItemSpeType/'+`${props.dataType._id}`)
    console.log("Test: ",props.dataType)

    await props.setDataFlatTypeItem(result.data)

  } catch (error) {
    console.log(error)
  }
}