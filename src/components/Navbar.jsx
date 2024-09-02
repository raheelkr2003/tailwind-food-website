import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between px-5 p-2 sm:flex-row flex-col'>
        <div className='flex justify-center items-center'>
            <img className='w-[60px]' src="src\assets\logo.png" alt="" />
            <h2 className='font-bold text-gray-600 text-lg ml-2'>WOW CAFE</h2>
        </div>
        <div className='flex gap-x-5 justify-center items-center'>
            <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Home</h2>
            <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>About</h2>
            <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Foods</h2>
            <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Contact</h2>
        </div>
    </nav>
  )
}

export default Navbar
