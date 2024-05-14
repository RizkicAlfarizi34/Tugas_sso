import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaTimes } from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  }
  const content = <>
  </>
  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>Logo</span>
        </div>
        <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link spy={true} smooth={true} to="/">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Home</li>
              </Link>
              <Link spy={true} smooth={true} to="/login">
                <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>Logout</li>
              </Link>
            </ul>
          </div>
        </div>

        <div>
          {click && content}
        </div>

        <button className='block sm:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>

      </div>
    </nav>
  )
}

export default Nav