let express = require('express'),
app = express(),

http = require('http'),
server = http.createServer(app),
io = require('socket.io')(server),
port = 4000

io.on(
    'connection',
    
    socket => {
        socket.emit(
            'isIn',
            {
                wlcTxt:'Hello from socketServer, :D '
            }
        )

        socket.on(
            'imhere',
            data => console.log(data.wlcTxt)
            )

        socket.on(
            'newMess',
            data=> {
                socket.emit(
                    "newMess",
                    {
                        msg:data.msg
                    }
                )
                console.log(data.msg)
            }
        )
    }
)

server.listen(
    port,
    ()=>console.log("SocketServer Running ... ")
  )
