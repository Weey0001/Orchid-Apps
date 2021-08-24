import io from 'socket.io-client';

export const socketConnection = props => {
    let  socket = io('http://192.168.1.2:4000')
    socket.on('isIn',(data)=>{
        
        socket.emit(
            'imhere',
            {
                wlcTxt:"Hello from Client"
            })
        console.log(data.wlcTxt)
    })



}