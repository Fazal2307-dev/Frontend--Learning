import React, { useState } from 'react'

function App() {
 const [val,setVal]= useState([1,2,3,4,5,6])
  return (
    <div className='p-5'>
      {val.map(item => <h1>{item}</h1>)}
      <button onClick ={()=>setVal(()=> val.filter((item,index)=> index!= 3))}
      className='text-white bg-blue-500 rounded-full m-2 '> Click me</button>
    </div>
  )
}

export default App
