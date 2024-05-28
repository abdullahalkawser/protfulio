import React from 'react'
import Navbar from '../navber/Navbar'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Skills from '../Skilss/Skills'
import SkillsProgressBar from '../Skill/Skill'
import Idea from '../idea/Idea'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'

const Home = () => {
    return (
   <div>
    <Navbar></Navbar>
         <div className='p-28'>
       
       <Hero></Hero>
       <About></About>
       <Idea></Idea>
       <Skills></Skills>
       <SkillsProgressBar></SkillsProgressBar>
       <Contact></Contact>
       <Footer></Footer>
   </div>
   </div>
    )
}

export default Home