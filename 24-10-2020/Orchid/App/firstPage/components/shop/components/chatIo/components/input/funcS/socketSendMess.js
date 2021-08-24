import io from "socket.io-client";

export const sendMess = (props,mess) => {
 let  socket = io('http://192.168.1.2:4000')

 socket.emit(
  'newMess',
  {
    msg:mess.current._lastNativeText
  }
 )
 socket.on(
  'newMess',
  data => {
      console.log(data.msg) 
      props.setMsg([...props.msg,data.msg])
      
    }
  )

}