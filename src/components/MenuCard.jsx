import React from 'react'

function MenuCard({name, price, image}) {
  return (
    <div className='flex border border-gray-300 rounded-md px-4 py-2 gap-x-2 md:w-[40%]'>
      <img className='w-32 h-32 object-cover rounded-md' src={image} alt="" />
      <div className='flex flex-col'>
            <span className='text-gray-950 text-lg font-semibold'>{name}</span>
        <span>{price}</span>
        <span>Lorem ipsum dolor sit amet, elit.</span>
        <button className='text-white  w-32 py-2 px-4 bg-gradient-to-tl to-pink-500 from-pink-600 rounded-md'>Order Now</button>
      </div>
    </div>
  )
}

export default MenuCard
