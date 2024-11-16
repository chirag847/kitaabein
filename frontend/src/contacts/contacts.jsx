import React from 'react'
import { useForm } from "react-hook-form"
import Navbar from '../components/Navbar'
function contacts() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)



  return (
    <div className='h-screen flex  justify-center item-center '>

           <Navbar/>

      <div className='pt-20 mt-15'>
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <h3 className="font-bold text-2xl underline">Contact us:</h3>


       {/* name */}
    <div className='mt-4 space-y-2'>
      <span>Name</span>
      <br />
      <input type="text"
       placeholder='enter your Name' 
       className='w-80 px-3 py-1 border rounded outline-none dark:text-black'
       {...register("name", { required: true })}
       />
        <br />
       {errors.name && <span className='text-sm text-red-500'>This field is required</span>}

    </div>

 {/* email */}
 <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email"
       placeholder='enter your email' 
       className='w-80 px-3 py-1 border rounded outline-none dark:text-black'
       {...register("email", { required: true })}
       />
       <br />
       {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>



     {/* password */}
     <div className='mt-4 space-y-2'>
      <span>Message</span>
      <br />
      <textarea type="text"
       placeholder='enter your Message' 
       className='w-80 h-20 px-3 py-1 border rounded outline-none dark:text-black'
       {...register("msg", { required: true })}
       />
       <br />
       {errors.msg && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
     <br />
     <button className='bg-green-300  text-black p-1 rounded hover:bg-green-500 duration-200'>Submit</button>

     </form>
      </div>
   
    </div>
  )
}

export default contacts
