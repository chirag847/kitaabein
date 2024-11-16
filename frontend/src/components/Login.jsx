import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='dark:bg-slate-900 dark:text-black'>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    
         
     

      <a href="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>X</a>

      
   
    
    <h3 className="font-bold text-lg">Login</h3>
    
    {/* email */}
    <div className='mt-4 space-y-2'>
      <span>Email</span>
      <br />
      <input type="email"
       placeholder='enter your email' 
       className='w-80 px-3 py-1 border rounded outline-none'
       {...register("email", { required: true })}
       />
       <br />
       {errors.email && <span className='text-sm text-red-500'>This field is required</span>}

    </div>

    {/* password */}
    <div className='mt-4 space-y-2'>
      <span>password</span>
      <br />
      <input type="password"
       placeholder='enter your password' 
       className='w-80 px-3 py-1 border rounded outline-none'
       {...register("password", { required: true })}
       />
       <br />
       {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>

    {/* Button */}
   
    <div className='flex justify-around mt-4'>

    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 '
     
     >Login</button> 


     <p>Not registered?{" "}<Link to='/signup' className='underline  text-blue-500 cursor-pointer'>Signup</Link>
     {" "}</p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login