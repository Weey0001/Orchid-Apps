export const Source = async ( img , shopId , Api ) => 

  {

    return ( 
      
      img === undefined
      || img === null
      || img === "" 
      
    ) ?

      require ( './img/004.png' )
      : { 
         
        uri: `${ Api }/static/images/${  shopId }/users/${ img }win.jpg`

      }
  }