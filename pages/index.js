import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'
import AOS from 'aos'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    })
    AOS.refresh()  
  }, [])


  return (
   <div className='flex flex-col min-h-screen'>
    <Head>Jake Warren</Head>
    <Hero />
    <Services />
    <Testimonials/>
   </div>
  )
}
