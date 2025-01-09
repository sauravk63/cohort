import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {

  const [loader, setLoader] = useState(true);
  const [userDetails, setUserDetails] = useState({title:"", description:""});
  useEffect(()=>{
    const resp = axios.get('https://my-app.nobodyhasitall.workers.dev/')
    
    setUserDetails(resp.data.json());
    console.log('Hello');
    
    setLoader(false);
  })

  if(loader){
    return (
      <div>Still Loading</div>
    )
  }

  return (
    <>
    <div>
      {userDetails}
      title : {userDetails?.title}
      description : {userDetails?.description}
    </div>
    </>
  )
}

export default App
