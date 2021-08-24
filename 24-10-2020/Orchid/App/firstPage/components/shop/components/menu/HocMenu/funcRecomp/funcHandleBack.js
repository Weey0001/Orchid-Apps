import { 

  Alert ,
  BackHandler

} from 'react-native'

export let subscriptionfunc = props => {

  let {

    actionMenuToDo , 
    ToShopCat ,
    ToShopView ,
    ToTypeView ,
    ToItemView ,
    setDataCat ,
    dataCat ,
    setDatafromType ,
    datafromType ,
    setDataShop ,
    dataShop ,
    dataDeployerShop ,
    togglNav , 
    togglnavInt

  } = props

  if ( togglNav )
  {

    togglnavInt ()

  } else {
    
    if ( 
      
      (
      
        actionMenuToDo === "todeployershop" 
        && dataCat === false

      )

      || (

        actionMenuToDo === "totypeview" 
        && dataCat === false

      )

      || actionMenuToDo === "toshopview"

    )
    {
      
      ToShopCat ()
      setDataCat ( false )
      return true

    } else if ( 

      (

        actionMenuToDo === "todeployershop"
        && dataCat !== false

      )
      
      || actionMenuToDo === "totypeview" 

      || (

        actionMenuToDo === "toitemdeployer"
        && datafromType === false
        && dataShop === false

      )
      
    ) {

      ToShopView ()
      setDataShop ( false )
      return true

    } else if ( 
      
      (

        actionMenuToDo === "toitemdeployer"
        && datafromType === false
        && dataShop !== false

      )

      || actionMenuToDo === "toitemview" 
      
    ) {

      ToTypeView ()
      setDatafromType ( false )
      return true

    }else if ( 
      
      actionMenuToDo === "toitemdeployer"
      && datafromType !== false
    
    ) {

      ToItemView ()
      return true

    } else if (

      actionMenuToDo === "toitemdeployer"
      && datafromType === false
      && dataShop === false

    ) 
    {

      ToShopCat ()
      return true

    } else {

      Alert.alert (
        'Quit' ,
        'You Sure' ,
        [
          {

            text: 'Cancel' , 
            onPress: () => console.log( 'Cancel Pressed' ) , 
            style: 'cancel'

          } ,

          {
            
            text: 'OK' , 
            onPress: () => BackHandler.exitApp ()
          
          } ,
        ]
      )

      return false

    }

  } 

}