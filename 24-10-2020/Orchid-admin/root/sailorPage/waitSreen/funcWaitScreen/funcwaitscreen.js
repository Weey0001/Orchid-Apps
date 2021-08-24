import { getPermissionAsync, checkUserFileSystem } from "./comDidMount/compDidMnt"

export const awakeStartFunctions = async props => {
  
  await getPermissionAsync ()
  await checkUserFileSystem ( props )

}

