import React, { useState } from 'react'

function App() {
  const [val,setVal] = useState({name:"Fazal", isBanned:false});
  return (
    <div >
      <h2>{val.name}</h2>
      <h2>{val.isBanned .toString()}</h2>
      <button   onClick={()=>setVal({...val, name:"Value change with the help of spred fn",isBanned:! val.isBanned})} className='bg-amber-300 rounded -full '>update value of object</button>
    </div>
  )
}

export default App
