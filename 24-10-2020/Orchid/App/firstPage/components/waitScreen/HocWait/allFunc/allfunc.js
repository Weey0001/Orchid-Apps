import * as FileSystem from 'expo-file-system';
import { Path } from '../../../config/connections/connections';
import { GetShopCat } from '../../../../funcHocFirstP/funcHoc';

export const checkIntData = async (props) => {

  try {

    let info = await FileSystem.getInfoAsync( 
      
      Path +
      '/data.txt'
    
    )

    if ( info.exists )
    {

      await GetShopCat ( props )
      //todo: action for existing internalData

      // deletAs()

    } else {

      setTimeout( _ => {
        
        props.setOn( true )

      } , 2000 );

    }  

  } catch ( error ) {
    
    alert( error )

  }

}

// reinitialise App User Data

let deletAs = async _ => {

  await FileSystem.deleteAsync( Path )

  let info = await FileSystem.getInfoAsync( Path )

  alert( info.isDirectory )

}

