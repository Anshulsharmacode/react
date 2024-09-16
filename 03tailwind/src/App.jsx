
import { useState } from 'react'
import './App.css'

function App() {
  
  const [color , setcolor]= useState("red")

  return (
    <div className='h-full w-full'style={{backgroundColor:color}} >
     {/* <div className='flex px-7 py-4 h-full w-full justify-center  rounded-full bg-slate-800'> */}
        <button className='bg-red-700' onClick={()=>setcolor("red")}> red</button>
        <button className='bg-green-700' onClick={()=>setcolor("green")}> green</button>
        <button className='bg-yellow-700' onClick={()=>setcolor("yellow")}> yellow</button>
        <button className='bg-blue-700' onClick={()=>setcolor("blue")}> blue</button>
        <button className='bg-blue-950' onClick={()=>setcolor("blue")}> dark blue</button>
        <button className='bg-gray-700' onClick={()=>setcolor("gray")}> gray</button>
        <button className='bg-white' onClick={()=>setcolor("white")}> white</button>
        {/* </div> */}
    </div>
  )
}

export default App
 