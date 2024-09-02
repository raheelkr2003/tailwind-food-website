import React from 'react'
import FoodCard from '../components/FoodCard'
import MenuCard from '../components/MenuCard'

function Home() {
    const foodCard =[
        {
            id :1,
            imgUrl : "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Pizza"
        },
        {
            id :2,
            imgUrl : "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Burger"
        },
        {
            id :3,
            imgUrl : "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name : "Momos"
        }
    ]
    const menuCard =[
        {
            id: 1,
            name :"Burger",
            price :"600",
            imageUrl :"https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 2,
            name :"Burger",
            price :"600",
            imageUrl :"https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 3,
            name :"Burger",
            price :"600",
            imageUrl :"https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            id: 4,
            name :"Burger",
            price :"600",
            imageUrl :"https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]
  return (
    <div>
        {/* Hero Section */}
        <section className='relative'>
            <img className='h-[50vh] w-full object-cover' src="src\assets\heroimg.jpg" alt="" />
            <div className='absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]'>
                <div className='flex gap-1'>
                    <input placeholder='Search' className='px-4 sm:w-[35vw] w-[50vw] py-2 focus:outline-none border border-gray-400 rounded-lg' type="text" name="" id="" />
                    <button className='text-white  py-2 px-6 bg-gradient-to-tl to-pink-500 from-pink-600 rounded-md'>Search</button>
                </div>
            </div>
        </section>
        {/* Explore Fodd */}
        <section className='w-[100vw] flex flex-col justify-center items-center p-5'>
            <h2 className='text-3xl font-bold text-gray-700 mb-8'>
                Explore Foods
            </h2>
            <div className='w-full flex-wrap flex items-center gap-10 justify-center'>
                {
                    foodCard.map((item)=>(
                        <FoodCard key={item.id} name={item.name} image={item.imgUrl}/>
                    ))
                }
            </div>
        </section>
        {/*  */}
        <section className='mx-auto mt-10'>
            <h2 className='text-center font-bold text-2x1'>Food Menu</h2>
            <div className='flex flex-wrap justify-around mt-10 gap-4 mb-10'>
                {/* <MenuCard/>
                <MenuCard/>
                <MenuCard/>
                <MenuCard/> */}
            {
                menuCard.map((item)=>(
                 <MenuCard key={item.id} name={item.name} price={item.price} image={item.imageUrl}/>
                ))
            }
            </div>

        </section>
      
    </div>
  )
}

export default Home
