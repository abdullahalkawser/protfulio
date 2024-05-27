import React from 'react'
import Navbar from '../navber/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skilss/Skills'
import SkillsProgressBar from '../Skill/Skill'

const Home = () => {
    return (
   <div>
    <Navbar></Navbar>
         <div className='p-20'>
       
       <Hero></Hero>
       <About></About>
       <Skills></Skills>
       <SkillsProgressBar></SkillsProgressBar>
   </div>
   </div>
    )
}

export default Home