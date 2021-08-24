import * as Permissions from 'expo-permissions';
import { 

  getInfoAsync ,
  documentDirectory ,
  deleteAsync

 } from "expo-file-system";
import { loadShopData } from './DataFunc/DataFunc';

const path = documentDirectory + "/UserFile/userFile.txt"
const pathDir = documentDirectory + "/UserFile"

export const getPermissionAsync = async _ => {

  await 
    Permissions
      .askAsync (

        Permissions.CAMERA ,
        Permissions.AUDIO_RECORDING ,
        Permissions.CAMERA_ROLL

      ); 

}

export const checkUserFileSystem = async props => {

  try {
    
    let checkInFile = await getInfoAsync ( path )

    if ( checkInFile.exists ) {

      console.log ( "exist" )

      // await deleteAsync ( pathDir )

      await loadShopData ( props )

    } else { 

      console.log ( "don't" )

      await props.ToRegister ()

    }

  } catch ( error ) {
    
    alert ( error )

  }
  
}