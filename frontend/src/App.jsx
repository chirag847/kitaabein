import React from 'react'
import Home from './home/Home';
import Course from './components/Course';
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Abouts from './Abouts/Abouts';
import Contacts from './contacts/contacts';
function App() {
  return (
   <>
   {/* <Home/>
   <Course/> */}

  <div  className='dark:bg-slate-900 dark:text-white '>

  <Routes>
    <Route path="/" element={<Home/>}   />
    <Route path="/course" element={<Courses/>}   />
    <Route path="/signup" element={<Signup/>}   />
    <Route path="/About" element={<Abouts/>}   />
    <Route path="/contacts" element={<Contacts/>}   />
    
   </Routes>
   
  </div>
   </>
  );
}

export default App
