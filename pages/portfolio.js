import React, { useState } from 'react'
import anallegories from '../public/img/anallegories-thumbnail.png'
import Image from 'next/image'
import metagym from '../public/img/metagym-thumbnail.png'
import terra from '../public/img/terra-thumbnail.png'
import elixir from '../public/img/elixir-thumbnail.png'

function Portfolio() {

  const projects = [
    {
      "title": "Anallegories",
      "img": anallegories,
      "url": "https://anallegories.com/"
    },
    {
      "title": "Terra Shimmer",
      "img": terra
    },
    {
      "title": "Metagym",
      "img": metagym,
      "url": "https://www.meta-gym.io/"
    },
    {
      "title": "Elixir Sound Library",
      "img": elixir,
      "url": "https://www.meta-gym.io/"
    }


  ]


  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className='flex flex-col justify-center items-center mt-28'>
      <h2 className="uppercase font-bold text-6xl mb-8">My Work</h2>
      <div className='border-1 grid grid-cols-2 gap-4'>
        {projects.map((proj, i) => (
          <Image src={proj.img} height={200} width={200} alt={proj.title} className="cursor-pointer hover:scale-105 ease-in-out duration-300" />
        ))}

      </div>

    </div>
  )
}

export default Portfolio