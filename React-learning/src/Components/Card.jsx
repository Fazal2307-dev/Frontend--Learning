import React,{useState} from 'react'

function Card() {
 const [val,setVal] =  useState([
    {name:"Fazal",age:23},
    {name:"Afzal",age:21},
    {name:"Saniya",age:13}
  ])
  return (
    <div>
      {val.map((item)=>
      <div>
         <h1>{item.name}</h1>
         <h2>{item.age}</h2>
      </div>
      )}
      <button  onClick={()=>setVal(()=>val.map(item=> item.name === "Afzal" ? ({name:"Afzal",age:18}) : item ))} className='bg-blue-400 rounded p-3 m-2'>Click me</button>
    </div>
  )
}

export default Card
