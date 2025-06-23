import React from 'react'

function Card() {
  return (
    <div className='w-full h-screen bg-zinc-500'>
      <div className='w-52 bg-zinc-100 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md overfollow-hidden'>
            <div className='w-full h-32 bg-zinc-300'></div>
            <div className='w-full px-3 py-4'>
                <h2>Amazon Basic.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum nam, dolorem porro nesciunt ex dolores harum debitis, nulla adipisci voluptatem quia quam fuga tempora ullam temporibus! Ullam, dignissimos porro!</p>
            </div>
      </div>
    </div>
  )
}

export default Card
