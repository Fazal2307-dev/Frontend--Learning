import React from 'react'

import Card from './Components/Card'

const App = () => {

  const Array = ["Fazal","Afzal","Sanya","ALiya"];

  return (
    <div>
     { Array.map((elem,index) =>(
      <div className='w-fit px-3 py-4 bg-zinc-400'>
        {elem}
      </div>
     ))}
    
 
    </div>
  )
}

export default App
