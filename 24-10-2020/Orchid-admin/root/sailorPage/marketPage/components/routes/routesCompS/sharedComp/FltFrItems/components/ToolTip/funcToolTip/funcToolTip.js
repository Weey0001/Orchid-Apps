import * as Animatable from "react-native-animatable";

export const SourceImg = props => {

  return props.toggleFormList === 1 ? require( "./img/toicn.png" ) : require( "./img/tolist.png" )
}

export const OnPressToolTip = async ( props , ref ) => {

  let end = await ref
    .current
    .zoomOut ( 200 )
  
  if ( end.finished ) 
  {

    props.toggleFormList === 1 ? 
      await props.ToItems ()
      : await props.ToList ()

  }

  await ref
    .current
    .zoomIn ( 200 )
  
}