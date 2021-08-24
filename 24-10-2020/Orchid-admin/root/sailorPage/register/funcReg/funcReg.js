export const onSubmitData = props => {

  let info = {

    pseudo: props.pseudo.trim () ,
    firstName: props.firstName.trim () ,
    lastName: props.lastName.trim () ,
    email: props.email.trim () ,
    phone: props.phone.trim () ,
    pass: props.pass.trim ()
    
  }

  let arrayInfo = Object.values( info )

  let notAllEmpty = arrayInfo.some ( ele => ele !== "" )

  notAllEmpty ? 
    props.SuccesSignInput ( props ) 
    : props.FailedTest ( "Complet all Fields" )

}

export const toCheckEmail = props => {

  let info = {

    email: props.email.trim () ,
    pass: props.email.trim () ,

  }

  let arrayInfo = Object.values( info )

  let notAllEmpty = arrayInfo.some ( ele => ele !== "" )

  notAllEmpty ? 
    props.SuccesLogInfo ( props ) 
    : props.FailedTest ( "Complet all Fields" )
    
}