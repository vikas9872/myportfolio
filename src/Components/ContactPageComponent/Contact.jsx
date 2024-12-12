import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); 
  return (
    <div className='flex flex-col pt-10 items-center h-auto'>
      <div className='text-black dark:text-white items-center font-bold text-4xl md:text-7xl font-roboto-condensed p-10' data-aos="fade-right">
        CONTACT ME
      </div>
      <div className='dark:text-white text-3xl' data-aos="fade-right">
        <h1>Connect with me</h1>
      </div>
      <div className='flex gap-12 flex-wrap justify-evenly w-full mt-20 items-center' data-aos="fade-right">
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-4xl dark:text-white'>Phone</h1>
          <p className='dark:text-white'>+91 8296689623</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-4xl dark:text-white'>Email</h1>
          <p className='dark:text-white'>vikasshanabhog0@gmail.com</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-4xl dark:text-white'>Address</h1>
          <p className='dark:text-white'>Mathikere, Bengaluru</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-4xl dark:text-white'>Others</h1>
          <div className='flex gap-8 justify-center items-center'>
            <a href="https://www.linkedin.com/in/shanabhogvikas/">
              <img src="./ImageAssets/linkedIn.png" alt="linkedIn" className='h-16 w-16' />
            </a>
            <a href="https://github.com/vikas9872">
              <img src="./ImageAssets/github.png" alt="github" className='h-16 w-16' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
