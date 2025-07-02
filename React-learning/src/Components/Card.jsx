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
    </div>
  )
}

export default Card
