import React, { useState, Suspense, useContext } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { CountContext } from './context'

import './App.css'
import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from 'recoil'
import { countAtom } from './store/atoms/count'
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

// Using COntextAPI

// function App(){
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount={setCount}/>
//       </ CountContext.Provider >
//     </div>
//   )
// }

// function Count({setCount}){
// return(
//   <div>
//     <CountRenderer />
//     <Button setCount={setCount} />
//   </div>
// )
// }

// function CountRenderer(){

//   const count = useContext(CountContext)
//   return (
//     <div>
//       {count}
//     </div>
//   )
// }

// function Button({setCount}){

//   const count = useContext(CountContext)
//   return(
//     <div>
//   <button onClick={()=>{
//     setCount(count+1)
//   }}>Increase</button>
//   <button onClick={()=>{
//     setCount(count - 1)

//   }}>Decrease</button>
//     </div>
//   )
  


// }

function App(){
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  console.log('hello rerender');
  
return(
  <div>
    <CountRenderer />
    
    <Button />
    <EvenCaption />
  </div>
)
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)

  return (
    <div>
      <b>
      {count}
      </b>
    </div>
  )
}

function Button(){

  const setCount = useSetRecoilState(countAtom);

  return(
    <div>

  <button onClick={()=>{
    setCount(count => count+1)
  }}>Increase</button>
  
  <button onClick={()=>{
    setCount(count => count - 1)
  }}>Decrease</button>

    </div>
  )
}

function EvenCaption(){
  const count = useRecoilValue(countAtom);
  return (
    (count%2==0) && 
    <div>
      It is Even
    </div>
  )
}

export default App
