import React from 'react';
import { FaPhoneSquareAlt, FaHouseUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <div className='mt-20'>
      <div className='flex items-center justify-center text-center'>
        <div>
          <p className="text-lg font-semibold">Get in Touch With us</p>
          <h2 className="text-4xl font-bold my-4">CONTACT US</h2>
          <p className="max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quas provident aut rem at ipsum velit sed illum non rerum maxime quod sequi doloribus nesciunt suscipit sit. Sit, dolor. Error!</p>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-between gap-8 text-center">
        <div className="flex flex-col items-center">
          <FaPhoneSquareAlt className="text-4xl mb-2 text-white" />
          <p className="font-bold">Phone NO.</p>
          <p>0198374557</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLocationDot className="text-4xl mb-2 text-white" />
          <p className="font-bold">Address</p>
          <p>Usa californiya</p>
        </div>
        <div className="flex flex-col items-center">
          <MdMarkEmailRead className="text-4xl mb-2 text-white" />
          <p className="font-bold">Email</p>
          <p>abdullah@gmail.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHouseUser className="text-4xl mb-2 text-white" />
          <p className="font-bold">Opening Hours</p>
          <p>0198374557</p>
        </div>
      </div>





      

      
  <div className="contact-form mt-16 flex flex-wrap justify-between items-center">
    <form className="w-full md:w-1/2 space-y-8">
      <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="First Name" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Last Name" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 px-2">
          <input type="email" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="E-mail" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input type="text" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Phone" />
        </div>
      </div>
      <div>
        <textarea rows="5" placeholder="Message" className="form-control w-full p-2 border border-gray-300 rounded"></textarea>
      </div>
      <div>
        <input type="submit" className="send-btn w-full p-2 bg-blue-500 text-white rounded cursor-pointer" value="Send Message" />
      </div>
    </form>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img src="/contact-png.png" alt="Contact" className="w-4/5" />
    </div>
  </div>


    </div>
  )
}

export default Contact;
