import dev from '../public/img/branding.svg'
import ui from '../public/img/designer.svg'
import seo from '../public/img/seo.svg'
import Image from 'next/image'

const services = [
  {
    "title": "UI/UX Design",
    "img": ui
  },
  {
    "title": "Full Stack Development",
    "img": dev
  },
  {
    "title": "SEO & growth",
    "img": seo
  }
]

function Services() {
  return (
    <div className='py-10 md:py-40 px-10' data-aos="fade-in">
      <h2 className='uppercase font-bold text-3xl lg:text-6xl mb-10 md:mb-40 text-center'>Services</h2>
      <div className='flex justify-center'>
        <div className='flex flex-col lg:flex-row gap-20'>
          {services.map((service, index) => (
            <div key={index} className='flex flex-col gap-4 items-center'> 
              <Image src={service.img} height={150} alt={service.title} />
              <p className='font-bold text-center'>{service.title}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Services