import * as FileSystem from 'expo-file-system';

export const Api = "http://192.168.1.2:5000"

export const Path = FileSystem.documentDirectory + '/userData'

export const connections = async props => {

  try {

    if ( await  props.dataShopCat !== false )
    {
  
      setTimeout( 
        
        async _  => {

          await props.ToShop()

        } , 
      
        3000
      
      );
  
    } else {
  
      props.setWait( true )
      alert( "Reload your app" )
  
    }
    
  } catch ( error ) {

    props.setWait( true )
    alert( error )

  }

}
