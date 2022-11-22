import React, { useState } from 'react'
import anallegories from '../public/img/anallegories-thumbnail.png'
import Image from 'next/image'
import metagym from '../public/img/metagym-thumbnail.png'
import terra from '../public/img/terra-thumbnail.png'
import nsz from '../public/img/nsz-thumbnail.png'
import Head from "next/head"


function Portfolio() {

  const projects = [
    {
      "title": "Anallegories",
      "img": anallegories,
      "url": "https://anallegories.com/"
    },
    {
      "title": "North Shore Zen",
      "img": nsz,
      "url": "https://northshorezen.com/"
    },
    {
      "title": "Terra Shimmer",
      "img": terra
    },
    {
      "title": "Metagym",
      "img": metagym,
      "url": "https://www.meta-gym.io/"
    }
  ]


  return (
    <div className='flex flex-col justify-center items-center mt-28 px-5'>
      <Head>
        <title>Portfolio | Jake Warren</title>
      </Head>
      <h2 className="uppercase font-bold text-3xl lg:text-6xl mb-8">My Work</h2>
      <div className='border-1 grid grid-cols-2 gap-4'>
        {projects.map((proj, index) => (
          <a key={index} target="_blank" rel="noopener noreferrer"href={proj.url}><Image src={proj.img} height={200} width={200} alt={proj.title} className="cursor-pointer hover:scale-105 ease-in-out duration-300" /></a>
        ))}

      </div>

    </div>
  )
}

export default Portfolio