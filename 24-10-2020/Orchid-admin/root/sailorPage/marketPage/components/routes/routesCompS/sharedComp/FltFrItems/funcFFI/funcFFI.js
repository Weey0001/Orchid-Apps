let FiltredData = async props => {

  try {

    props.actionMarket === "allitems" 
    ? await props.setUsedData ( props.items )
    : props.actionMarket === "search" 
    ? await props.setUsedData ( [] )
    : null
    
  } catch ( error ) {
    
    alert ( error )

  }

}