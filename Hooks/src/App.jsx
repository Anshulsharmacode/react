import { useState } from 'react'

import './App.css'
function App() {
 // let Counter = 150
 let [Counter , setCounter] = useState(15)

  const addvalue= () => {
    if (Counter<20)
     setCounter(Counter+1)
    else (Counter===20)
      console.log("you have reached at high limit")
    
        
  }
  const deascerese = () => {
   
   if (Counter)
    setCounter(Counter-1)
   else(Counter===0)
     console.log("you have reached at high limit")

  }

  return (
    <>
    <h1>State Update</h1>
    <h2>Counter Value {Counter}</h2>
   

    <button onClick={addvalue}>add value</button>

    <button onClick={deascerese}> deacrese value {Counter}</button>

    </>

  )
}

export default App
