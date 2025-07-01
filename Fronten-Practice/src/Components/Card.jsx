import React, { useState } from 'react'

function Card() {
  const[val,setVal]=useState(0)
  return (
    <div className='p-4'>
      <p>You Travlled {val} This Km </p>
      <button  onClick={()=>{setVal(()=> val+1)}}  className='bg-blue-500 rounded m-4 text-amber-50'>Click me</button>
    </div>
  )
}

export default Card
