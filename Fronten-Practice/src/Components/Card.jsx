import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-blue-200 flex justify-center items-center  '>
      <div className='w-52 h-fit bg-red-200 rounded-md overflow-hidden '>
        <div className=''>
          <img src="https://images.unsplash.com/photo-1750490970730-493c7ea3fdf2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
          <div>
            <h2 className="text-xl m-1">Amazon.in</h2>
            <p className='m-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorum blanditiis vero nobis alias, optio, cum dolorem quas, sit saepe veritatis maiores sint? Quisquam ad aperiam nostrum.</p>
          </div>
      </div>
  
    </div>
  )
}

export default Card
