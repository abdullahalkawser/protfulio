import React from 'react';
import data from './idea.js';

const Idea = () => {
  return (
    <div>
      <div className='flex justify-center items-center h-full mt-20'>
        <span className='flex gap-2 items-center'>
          <p>
            <img className='w-24 rounded-3xl h-16' src='/about.png' alt="" />
          </p>
          <p className='text-3xl font-semibold '>Unique ideas</p>
          <p className='text-3xl font-semibold '>For your Business</p>
          <p className='bg-red-700 p-3 rounded-lg'>what i do</p>
        </span>
      </div>

      <div className='grid lg:grid-cols-4  md:grid-cols-3 gap-5 mt-10 grid-cols-1 '>
        {data.map((item, index) => (
          <div key={index} className=" glass p-10">
            <div className="">
              <h2 className="text-xl font-bold ">{item.brand}</h2>
              <p>{item.des.slice(0,220)}</p>
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Idea;
