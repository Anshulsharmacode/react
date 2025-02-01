import React, { useCallback, useEffect, useState } from 'react'

function App() {

  const [password, setpassword] = useState("")
  const [length, setLength] = useState(8)
  const [charallow, setcharallow] = useState(false)
  const [numberallow, setnumberallow] = useState(false)

  const passwordGen=useCallback(()=>{
    let pass="";
    let str="QWERTYUIOPASDFGHJKLZXCVBNM";
    console.log(str)

    if (numberallow) str+="123456789";
    if (charallow) str+="!@#$%^&*(){}[]";

    for (let i = 1; i <= length; i++) { 
      let pin= Math.floor(Math.random()*str.length);
      pass += str.charAt(pin);
      
      
    }

    setpassword(pass)

  },[numberallow,charallow,length])

  useEffect(()=>{
    passwordGen()
  },[length,charallow,numberallow])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <input 
        type="text" 
        value={password} 
        onChange={(e) => setLength(Number(e.target.value))}
        className="mb-4"
      />
      
      <input 
        type="range" 
        value={length} 
        onChange={(e) => setLength(Number(e.target.value))} 
        min="1" 
        max="20" 
        className="mb-4"
      />
      <span>Password Length: {length}</span>
      <label className="block mb-2">
        <input 
          type="checkbox" 
          checked={charallow} 
          onChange={(e) => setcharallow(e.target.checked)} 
          className="mr-2"
        />
        Allow Special Characters
      </label>
      <label className="block mb-2">
        <input 
          type="checkbox" 
          checked={numberallow} 
          onChange={(e) => setnumberallow(e.target.checked)} 
          className="mr-2"
        />
        Allow Numbers
      </label>
      {/* <button 
        onClick={passwordGen} 
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Generate Password
      </button> */}
      <p className="mt-4">{password}</p>
    </div>
  )
}

export default App
