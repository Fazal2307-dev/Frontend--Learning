import React, { useState } from 'react'

function App() {
  const [val,setVal] = useState({name:"Fazal", isBanned:false});
  return (
    <div >
      <h2>{val.name}</h2>
      <h2>{val.isBanned .toString()}</h2>
      <button   onClick={()=>setVal({...val, name:"Value change with the help of spred fn",isBanned:! val.isBanned})} className={` rounded-full text-white p-2 ${val.isBanned ? "bg-blue-500" :"bg-red-500"}`} >update value of object</button>
    </div>
  )
}

export default App
