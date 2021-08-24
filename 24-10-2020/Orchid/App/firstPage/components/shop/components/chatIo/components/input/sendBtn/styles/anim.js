import * as Animatable from "react-native-animatable";
import { sendMess } from "../../funcS/socketSendMess";

export const animSendBtn = async compRef => {
  try{
    compRef
      .current
      .fadeOutRight(400)
    
    toShow(compRef)
    sendMess(compRef)

  }catch(err){

    console.log(err)
    toShow(compRef)

  }

}


const toShow = ref => {
  setTimeout(
    _=> ref
          .current
          .bounceIn()
    , 400
  )
}