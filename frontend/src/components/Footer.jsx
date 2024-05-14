import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Logo</h2>
          <p className='text-[16px] my-4'>Lorem ipsum</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>Web Hosting</li>
            <li className='my-2'>E-Commerce</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email: youremail@gmail.com</p>
          <p className='text-[16px] my-4'>Phone: +62 888-444-2222</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
          <div className='flex space-x-4'>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
              <FaGithub />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
              <FaLinkedinIn />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
              <FaTwitter />
            </a>
            <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer