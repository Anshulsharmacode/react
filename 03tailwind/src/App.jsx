import React from 'react'
import { useState } from 'react'

function App() {
  
  const [colour , setcolor]= useState("red")

  
  return (
    <div className='w-auto h-auto' style={colour}>
      <button className="bg-green"onClick={setcolor}>green</button>
      
    </div>
  )
}

export default App





















// import { useState } from 'react'
// import './App.css'

// function App() {
  
//   const [color , setcolor]= useState("red")

//   return (
//     <div className='w-full h-full'style={{backgroundColor:color}} >
//      {/* <div className='flex justify-center px-7 py-4 w-full h-full rounded-full bg-slate-800'> */}
//         <button className='bg-red-700' onClick={()=>setcolor("red")}> red</button>
//         <button className='bg-green-700' onClick={()=>setcolor("green")}> green</button>
//         <button className='bg-yellow-700' onClick={()=>setcolor("yellow")}> yellow</button>
//         <button className='bg-blue-700' onClick={()=>setcolor("blue")}> blue</button>
//         <button className='bg-blue-950' onClick={()=>setcolor("blue")}> dark blue</button>
//         <button className='bg-gray-700' onClick={()=>setcolor("gray")}> gray</button>
//         <button className='bg-white' onClick={()=>setcolor("white")}> white</button>
//         {/* </div> */}
//     </div>
//   )
// }

// export default App
 