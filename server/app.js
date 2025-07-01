import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
const port=8001;
const app=express();
const server=createServer(app);
const io=new Server(server,{
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});
app.use(cors( {
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
}
    
));
app.get('/',(req,res)=>{
    console.log("vigyat randwa");
    
});
io.on("connection",(socket)=>{
    console.log("a user connected");
    console.log(socket.id);
   // socket.emit("welcome","welcome to the socket io server");
    //socket.broadcast.emit("wel","a new user has joined the chat");=> Send this message to everyone else currently connected, but not to me (the client associated with this socket object)." (Like whispering to everyone except the person next to you).
    socket.on("message",(room,message)=>{
        console.log({room,message});
       // io.emit("receive message",data); // Send the message to all connected clients,suuppose from tab1 we sent message then that mesage will be received by all the clients connected to the server.
        //socket.broadcast.emit("receive-message",data); // Send the message to all connected clients except the sender.
        io.to(room).emit("receive-message",message); // Send the message to all clients in the specified room. here we can use 'socket' also
        });
        socket.on("join-room",(roomName)=>{
        socket.join(roomName); // Join the specified room
        console.log(`User ${socket.id} joined room ${roomName}`);
        });

    socket.on("disconnect",()=>{
        console.log("user disconnected");
    });
})
    

server.listen(port,()=>{
    console.log(`listening on port ${port}`);
})