var socket = io.connect('http://localhost:3200')
socket.on('count',(data)=>{
    console.log(data)
})