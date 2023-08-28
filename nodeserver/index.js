//Server for handle Socket io connection.
const io = require('socket.io')(5500)
const users = {};

io.on('connection' , Socket =>{
    socket.on('new-user-joined' , none =>{
        console.log("new-user-joined" ,name)
        users[Socket.id] = name ;
        socket.broadcast.emit('user-joined', name);
    })

    socket.on('send' , message =>{
        socket.broadcast.emit('receive', {message:message , name :users[socket.id]})
    })
})
