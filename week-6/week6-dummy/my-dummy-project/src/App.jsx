import { useEffect, useState } from 'react'

function App() {

  const [exchangeRate, setExchangeRate] = useState({});
  const [income, setIncome] = useState({});

  console.log('page has re-rendered');

  useEffect(()=>{
    setTimeout(()=>{
      setExchangeRate({returns : 100})
    }, 3000)
    
    setTimeout(()=>{
      setIncome({data : 100})
    }, 1000)
  }, [])

  const incomeTax = exchangeRate.returns * income.data * 0.3;

  return (
    <>
      <div>
      Your total generated income tax is {incomeTax}
      </div>
    </>
  )
}

export default App
