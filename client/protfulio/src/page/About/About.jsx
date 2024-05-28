import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='mt-20'>
      <div className='md:flex gap-6 item-center'>
        <div className='sm:w-full md:w-1/2 lg:w-3/3  p-10'>
          <img className='rounded-lg w-full' src="/about.png" alt="About" />
        </div>

        <div className='sm:w-full md:w-1/2 lg:w-3/3 '>
          <div className='flex flex-col items-center space-y-6 text-center mx-auto mt-10'>
            <h2 className='text-white font-serif font-semibold text-2xl'>About Me</h2>
            <p>
              Hi! I'm a software engineer. I'm a self-driven programmer who loves taking on challenges and solving complex problems in day-to-day life. My journey in the world of technology systems and platforms is an exciting blend of academic learning and practical application. This role combines technical expertise with problem-solving skills to create efficient and reliable software solutions that meet the needs of users and organizations.
            </p>
            <div className='flex gap-5 justify-center items-center'>
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
              <span><FaGithub /></span>
              <span><FaLinkedin /></span>
            </div>
            <button className='btn'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
