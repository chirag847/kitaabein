import React from 'react'
import Cards from './cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
function Course() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>

<div className='mt-16 items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
  <h1 className='text-2xl md:text-4xl pt-5 dark:bg-slate-900 dark:text-white'>We are delighted to have you  
    <span className='text-pink-500'> Here !:)</span>
  
  </h1>

  <p className='mt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum rerum tempora praesentium quod expedita eum maiores, ex cum inventore reprehenderit? Architecto, distinctio? Nihil doloremque placeat dolorum magnam consequatur corporis necessitatibus provident exercitationem culpa, tenetur ratione incidunt saepe. Reiciendis maxime eligendi iste, id, eos corporis officia, ducimus impedit quam numquam voluptates.</p>

 <Link to="/">
 <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 dureation-300 mt-6'>Back</button>
 </Link>

</div>

   <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 '>
    {
      list.map((item)=>(
        <Cards item={item} key={item.id} />
      ))
    }
   </div>

   <br />

   </div>
   
   </>
  )
}

export default Course
