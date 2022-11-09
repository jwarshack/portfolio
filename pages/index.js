import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import { useEffect } from 'react'

export default function Home() {

  return (
   <div className='flex flex-col min-h-screen overflow-hidden'>
    <Head>
      <title>Jake Warren</title>
    </Head>

    <Hero />
    <div>
    <Services />
    <Testimonials/>
    </div>
   </div>
  )
}
