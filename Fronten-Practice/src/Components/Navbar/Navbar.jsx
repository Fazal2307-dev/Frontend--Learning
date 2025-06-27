import React from 'react'

function Navbar() {
  return (
    <div>
      <ol className='bg-black text-blue-50 flex justify-center items-center gap-10 p-3'>
        <li>AMAZON.IN</li>
        <li>Location</li>
        <li>
            <form>
                <input  className='bg-amber-50 w-120'  type='text' name='Search'  placeholder='search' required/>
            </form>
        </li>
        <li>Country</li>
        <li>Account</li>
        <li>Reaturn & Order</li>
        <li>Cart</li>
      </ol>
   
    </div>
  )
}

export default Navbar
