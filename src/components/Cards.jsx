import React from 'react'

function Cards({item}) {
  return (
   <>
   <div className='mt-4 my-3 '>

   <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  pl-6 md:p-10  dark:bg-slate-900 dark:text-white border-2 border-black dark:border-2 dark:border-white mx-3">
  <figure>
    <img className='p-5 pr-12 md:p-5 md:pr-3 md:p-auto'
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 duration-200 hover:border-black p-2 border-[2px] hover:text-white cursor-pointer">Buy Now</div>
    </div>
  </div>
</div>
    </div></>
  )
}

export default Cards
