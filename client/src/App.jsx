import React from 'react'
import { useEffect,useState } from 'react';
import {io} from 'socket.io-client';
import { Container, Typography } from '@mui/material';
import { useMemo } from 'react';

const App = () => {
  const socket = useMemo(() => io('http://localhost:8001'),[]);
      const {messages,setMessages} = useState([]);
  const {message,setMessage} = useState('');
  const [room,setRoom] = useState('');
  const [socketID,setSocketID] = useState('');
  const [roomName,setRoomName] = useState('');

    console.log(messages);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('message', message);
   
    console.log('Message sent:', {message,room}); 
    setMessage(''); // Clear the input field after sending the message           
   
  }
  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit('join-room', roomName);
    console.log('Room joined:', roomName);
    setRoom(roomName); // Set the room state to the room name
    setRoomName(''); // Clear the input field after joining the room
  }
  useEffect(() => {
    socket.on('connect',() =>{
      setSocketID(socket.id);
      console.log('Connected to server',socket.id);

    });
    socket.on("receive-message",(data)=>{
      console.log("Received message:",data);
      setMessages((messages) => [...messages, data]);
    });
    socket.on("wel",(s)=>{
      console.log(s);
    });
    return ()=>{
      socket.disconnect();
    }
  })
  return (
    <Container maxWidth="sm" style={{marginTop:"20px"}}>
      <Typography variant="h1" component="div" align="center" gutterBottom>
        Welcome to the Socket.IO Chat App
      </Typography>
      <Typography variant="h2" component="div"  gutterBottom>
        {socketID}
      </Typography>
      <form onSubmit={joinRoomHandler}>
       <TextField id="message" value={roomName} onChange={(e)=> setRoomName(e.target.value)} label="room name" variant="outlined" fullWidth />
       <Button variant="contained" type="submit" color="primary" style={{marginTop:"10px"}}>join room</Button>


        </form>
      <form onSubmit={handleSubmit}>
        <TextField id="message" value={message} onChange={(e)=> setMessage(e.target.value)} label="Type your message" variant="outlined" fullWidth />
        <TextField id="roomm" value={room} onChange={(e)=> setRoom(e.target.value)} label="room" variant="outlined" fullWidth />

        <Button variant="contained" type="submit" color="primary" style={{marginTop:"10px"}}>send</Button>
      </form>
      <stack>
        {messages.map((m, index) =>{
          <Typography key={index} variant="body1" style={{marginTop:"10px"}}>
            {m} <span style={{color:"gray"}}>({m.room})</span>
          </Typography>
          })}
      </stack>
    </Container>
  )



}
export default App


