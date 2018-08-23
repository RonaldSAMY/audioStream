var express = require('express');
var app = express();
const v = 0;
var counter = 0;
const socket = require('socket.io');

const server = app.listen(3200,()=>{
    console.log('Server listining 3200');
})
app.use(express.static('public'));


// should be after listening socket
const io = socket(server)
io.on('connection',function(socket){
    console.log('user connected');
    setInterval(
        ()=>{
            counter += 1;
            socket.emit('count',{'counter':counter})
            console.log(counter)
        },1000
    )
}
)


/*
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);*/