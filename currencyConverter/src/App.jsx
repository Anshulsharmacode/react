
import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import useCurrencyinfo from './Hooks/useCurrency'
function App() {
  const[amount ,setamount]=useState(0)
  const[from , setfrom]=useState("usd")
  const[to, setto]=useState("inr")
  const[convertAmount , setconvertAmount]=useState("0")

  const currencyinfo =useCurrencyinfo(from)

  const option=Object.keys(currencyinfo)
  return (
    <>
    <Input/>
       
     
    </>
  )
}

export default App
