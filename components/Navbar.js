import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../public/img/logo.png'

function Navbar() {
  return (
    <div className='flex px-10 py-2 w-full text-white bg-transparent fixed justify-between items-center z-10'>
      <Link href='/'><Image src={logo} height={60} width={60} alt='JW logo'/></Link>
      <ul className='flex gap-4'>
        <Link href='/portfolio'><li className='hover:text-gray-300'>Portfolio</li></Link>
        <Link href='/contact'><li className='hover:text-gray-300'>Contact</li></Link>
      </ul>
      
    </div>
  )
}

export default Navbar