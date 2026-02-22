import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [message, setMessage] = useState<string>("")
  const [loadMessage, setLoadMessage] = useState<string>("")


  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log('Message from server ', event.data);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error: ', error);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
    <input onChange={(e)=>setMessage(e.target.value)} />
    <button onClick={() => {socket?.send(message)}}>Send Message</button>
    <div>{loadMessage}</div>
    </>
  )
}

export default App
