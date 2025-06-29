import React, { useState } from 'react'

function App() {
 const[val,setVal]= useState([1,2,3,4,5,6])
  return (
    <div className='p-5'>
      <h1>
      {val.map(item=><h1>{item}</h1>)}
      </h1>
      <button  onClick={()=>setVal(()=>val.filter((item,index) => index != val.length-1))}
      className='text-white bg-blue-500 rounded-full'>Click me</button>
    </div>
  )
}

export default App
