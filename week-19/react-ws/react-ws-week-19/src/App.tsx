import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [socket, setSocket] = useState<any>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080');
    socket.onopen = () =>{
      console.log('Socket is open');
      setSocket(socket);
    }
    socket.onmessage = (message) =>{
      console.log('Received message : ', message.data);
      setLatestMessage(message.data);      
    }
    return () => {
      socket.close();
    } 
  }, []);

  if(!socket){
    return (
      <div>
        Connecting to socket server...
      </div>
    )
  }

  return (
    <>
    <input id='inputField' type="text" onChange={(e)=>{setMessage(e.target.value)}} />
    <button onClick={()=>{socket.send(message); document.getElementById('inputField').value = '';}}>Send</button>

      <p>{latestMessage}</p>
    </>
  )
}

export default App
