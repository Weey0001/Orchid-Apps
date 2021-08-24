export const formatDate = createdAt => 

  {

    let dateNow = new Date ();
    let dateModified = new Date ( createdAt )

    let deltaDate = dateNow.getTime () - dateModified.getTime ()
    let newDate = Math.round ( deltaDate / 1000 / 60 / 60 / 24 )

    return newDate < 30 ?
      ` Ajouter il y a ${ JSON.stringify ( newDate ) } jour ${ newDate > 1 ? "s" : "" }`
      : ( newDate >= 30 && newDate < 365 ) ?
      `Ajouter il y a ${ JSON.stringify ( Math.round( newDate / 30 ) ) } mois` 
      : newDate > 365 ?
      `Ajouter il y a ${ JSON.stringify ( Math.round ( newDate / 365 ) ) } an${ Math.round ( newDate / 365 ) > 1 ? "s" : "" }`
      : null
    
  }