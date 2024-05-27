import React from 'react'
import Navbar from '../navber/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'

const Home = () => {
    return (
   <div>
    <Navbar></Navbar>
         <div className='p-20'>
       
       <Hero></Hero>
       <About></About>
   </div>
   </div>
    )
}

export default Home