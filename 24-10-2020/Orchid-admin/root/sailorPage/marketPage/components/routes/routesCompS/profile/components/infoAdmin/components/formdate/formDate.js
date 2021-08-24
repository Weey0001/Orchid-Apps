import LazyText from "../LazyText/LazyText"

let FormDate = async time => 

  {

    let dateNow = new Date()
    let dateModified = new Date( time )

    let deltaDate = dateNow.getTime() - dateModified.getTime()
    let newDate = Math.round(deltaDate/1000/60/60/24)

    let newFormDate = newDate < 30 ?
      await formSecond ( newDate ) 
      : newDate >= 30 && newDate < 365 ?
      await formMounth ( newDate )
      : newDate >= 365 ?
      await formYear ( newDate )
      : null

    return (
    
      <LazyText

        title = "UpdatedAt"
        data = { newFormDate }
      
      />
    
    )

  }

export default FormDate

let formSecond = async time => 

  {

    return `Il y a ${ JSON.stringify ( time ) } jour${ time > 1 ?  "s" : "" }.`

  }

let formMounth = async time => 

  {

    let newMounthFull = time / 30
    let newMounth = Math.round ( newMounthFull )

    return `Il y a ${ JSON.stringify ( newMounth ) } mois.`

  }

let formYear = async time => 

  {

    let newYearFull = time / 365 
    let newYear = Math.round ( parseFloat ( newYearFull ) )

    return `Il y a ${ JSON.stringify ( newYear ) } an${ newYear > 1 ?  "s" : "" }`

  }