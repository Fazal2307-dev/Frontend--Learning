import React, { useState } from 'react'

function App() {
  const[value,setValue]=useState(2);
  return (
    <div>
      <h2>{value}</h2>
      <button  onClick={()=>setValue(prev=>prev+2)}  className='bg-yellow-400 m-3 p-2 rounded-full ov'>Twos Tables</button>
    </div>
  )
}

export default App
