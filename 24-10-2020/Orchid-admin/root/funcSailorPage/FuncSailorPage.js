import axios from "axios";

let reformatNumber = (someNumber) => {
  let stringNumb = someNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")
  return stringNumb
}

export const getShopCatData = async props => {

  try {

    let path = props.Api + "/shopcats/getallShopCat"

    let result = await axios ( path )

    await props.setShopCat ( result.data )

  } catch ( error ) {

    alert ( error )

  }

}