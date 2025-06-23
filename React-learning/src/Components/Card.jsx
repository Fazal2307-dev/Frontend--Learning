import React from 'react'

function Card() {
  const data = [
    {image:"https://images.unsplash.com/photo-1744646352219-1119cb68c906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",name:"Iphone",description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, non."},
    {image:"https://images.unsplash.com/photo-1749802449762-5e428ccf9a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",name:"sun",description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, non."},
    {image:"https://images.unsplash.com/photo-1749813482475-3c12a8c4a5bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",name:"Crowd",description:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, non."},
  ]
  return (
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center gap-10'>
     {data.map((elem,index)=>(
       <div key= {index} className='w-52 bg-zinc-100  rounded-lg overflow-hidden'>
            <div className='w-full h-32 bg-zinc-300'>
                <img className='w-full h-full object-cover'  src={elem.image} alt="amazon inc" />
            </div>
            <div className='w-full px-3 py-4'>
                <h2 className='font-semibold'>{elem.name}</h2>
                <p className='text-xs mt-3'>{elem.description}</p>
            </div>
      </div>
     ))}
    
    </div>
  )
}

export default Card
