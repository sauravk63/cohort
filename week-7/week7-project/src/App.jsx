import React, { useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { CountContext } from './context'

import './App.css'
const Landing = React.lazy(()=> import('./components/Landing'))
const Dashboard = React.lazy(()=> import('./components/Dashboard'))
const Random = React.lazy(()=> import('./components/Random'))



// function App() {

//   return (
//     <>
//     <div>
//       <div style={{background : 'black', color : 'white', }}>
//         <div>
//           This is top bar
//         </div>
//       </div>
//       <br />
        
//       <BrowserRouter>
//       <Appbar />
//       <Routes>
//         <Route path='/dashboard' element={<Suspense fallback={'loadingloadingloadingloadingloadingloadingloadingloading...'}> <Dashboard /> </Suspense>} />
//         <Route path='/' element={<Suspense fallback={'...loadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloading'}> <Landing /> </Suspense>} />
//         <Route path='/:' element={<Random />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//     </>
//   )
// }

// function Appbar(){

//   const navigate = useNavigate();
 
//   return (
//     <div>
//       <button onClick={()=>{
//           navigate('/dashboard')
//         }}>Dashboard</button>

//         <button onClick={()=>{
//           navigate('/');
//         }}>Landing Page</button>

//     </div>
//   )
// }

function App(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <CountContext.Provider value={count} >
      <Count count={count}/>
      <CountContext.Provider />

    </div>
  )
}

function Count({count}){
return(
  <div>
    {count}
    <Button count={count} setCount={setCount} />
  </div>
)
}

function Button({count, setCount}){
  return(
    <div>
  <button onClick={()=>{
    setCount(count+1)
  }}>Increase</button>
  <button onClick={()=>{
    setCount(count - 1)

  }}>Decrease</button>
    </div>
  )
  


}

export default App
