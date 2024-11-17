import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messageAtom, networkAtom, notificationAtom, totalNotificationCountAtom } from './atoms'

function App() {
  return (
    <RecoilRoot >
    <MyApp />
    </RecoilRoot>
  )
}

function MyApp (){
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom)

  const setMessageCount = useSetRecoilState(messageAtom);
  const totalNotoficationsCount = useRecoilValue(totalNotificationCountAtom);

  // const totalNotoficationsCount = useMemo(()=>{
  //   return networkCount + jobsCount + messageCount + notificationCount
  // }, [networkCount, jobsCount, messageCount, notificationCount]) 

  return <>
  <button>Home</button>
  <button>My Network ({networkCount > 99 ? '99+' : networkCount})</button>
  <button>Jobs ({jobsCount}) </button>
  <button>Messages ({messageCount})</button>
  <button>Notifications ({notificationCount})</button>
  <button
  onClick={()=>{
    setMessageCount(messageCount+1);
    console.log('re-render');
    
  }}
  >Me ({totalNotoficationsCount})</button>
  </>
}

export default App
