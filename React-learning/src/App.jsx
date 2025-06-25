import React, { useState } from 'react'



const App = () => {

  const [value,setValue]=useState(0)

  return (
    <div>
   <h2>{value}</h2>
    <button onClick={()=>setValue(value+1)} className='bg-blue-400 rounded-full px-3 py-1 mt-2'>Add To Cart </button>
 
    </div>
  )
}

export default App
