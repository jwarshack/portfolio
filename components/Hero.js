import React from 'react'
import profile from '../public/img/jake.jpg'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div className='pt-40 md:pt-0 flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row justify-center h-screen w-full'>
      <div className='bg-[#fe734e] lg:bg-[#ff8e71] w-full flex items-center justify-center'>
        <div className='text-center md:text-left flex flex-col' data-aos="fade-in">
          <h1 className='uppercase font-bold text-4xl md:text-6xl mb-2'>Jake Warren</h1>
          <p className='uppercase text-[#696D7D] font-semibold mb'>{'//' + ' About me'}</p>
          <p className='text-md'>Experienced Shopify developer from Newport Beach, California</p>
          <p className='text-[#696D7D] font-semibold'>I am a full stack Shopify developer specializing in Dawn 2.0</p>
          <Link href="/contact"><button className='bg-white text-black hover:scale-105 ease-in-out duration-300 font-bold uppercase rounded py-4 px-5 mt-8'>Contact me!</button></Link>
        </div>
      </div>
      <div className='bg-[#fe734e] w-full flex items-center justify-center relative'>
        <div className=' bg-[#ff8e71] h-[300px] w-[300px] rounded-full absolute left-3/4 bottom-3/4 hidden md:block'></div>
        <Image src={profile} className='rounded-full z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px]' alt='Jake Warren headshot'/>
      </div>

    </div>
  )
}

export default Hero