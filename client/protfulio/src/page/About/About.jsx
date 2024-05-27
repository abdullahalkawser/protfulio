import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div>


<div className='md:flex gap-6'>

<div class='sm:w-full md:w-1/2 lg:w-1/3'>
    <img class='rounded-lg image-full w-full' src="/about.png" alt="" />
</div>

<div class='sm:w-full md:w-1/2 lg:w-2/3'>
    <div className='space-y-6'>
        <h2 className='text-white font-serif font-semibold text-center text-2xl'>About Me</h2>
        <p>Hi ! I'm a software Engineer. I'm a self-driven programmer who loves taking challenges and go onward to solve complex problems in day-to-day life.! My journey in the world of technology is an exciting blend of academic learning and practical application.

Skills: REACT /NodeJS/Data & Algorithms/ Version Control/REST API Development/ Data Structures & Algorithms</p>

        <p className='flex gap-5'>
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaGithub /></span>
            <span><FaLinkedin /></span>
        </p>

        <button className='btn'>Read More</button>
    </div>
</div>
</div>

    </div>
  )
}

export default About