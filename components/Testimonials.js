import { useState } from "react";
import { BsChevronLeft, BsChevronRight} from 'react-icons/bs'
function Testimonials() {

  const testimonials = [
    {
      content: "Jake's one of the best people on Upwork. He's a capable problem solver and communicates what he's doing and why. Most importantly, he's honest and has integrity. Don't hesitate to work with Jake for any projects you need.",
      client: "Ethan Zawadzke"
    },
    {
      content: "If we could give Jake 100 stars we would. He is honest, hard-working, professional, kind and truly goes above and beyond what is expected of him. He's extremely resourceful, and if he doesn't know an answer to something, he will figure it out. All around an incredibly nice guy and a pleasure to work with. We hope to have the opportunity to continue working with him in the future. Thanks for everything, Jake!",
      client: "CryptoRings NFT"
    },
    {
      content: "Working with Jake was an awesome experience. He was very patient with my many requests and modifications. His dev work was superb. I'd highly recommend him for all website and smart contract development.",
      client: "MetaGym"
    },
    {
      content: "I've worked with a many devs in the past and Jake Warren has been the most knowledgeable and helpful out of them all. He delivers quality work, communicates very effectively and goes above and beyond to help out and teach. 10/10 would recommend.",
      client: "WarDogs NFT"
    },
    {
      content: "Jake was a pleasure to work with and was incredibly flexible. He has a wealth of knowledge and is a super hard worker!",
      client: "RideWithUs NFT"
    },

  ]


  const [slideIndex, setSlideIndex] = useState(0)

  const length = testimonials.length

  const next = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  const prev= () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };

  return (
    <div className="px-10 py-40 text-center">
      <h2 className="uppercase font-bold text-3xl lg:text-6xl mb-10">Testimonials</h2>

      <div className="flex">
        <div className="relative mx-auto w"> 
          <button onClick={prev} className="absolute -left-10 top-1/2 text-xl"><BsChevronLeft/></button>
          <button onClick={next} className="absolute -right-10 top-1/2 text-xl"><BsChevronRight/></button>
          {
            testimonials.map((j, index) => (
              <div className={slideIndex === index ? "bg-[#ff8e71] h-[300px] p-5 md:p-10 rounded-md lg:w-[500px] text-center overflow-y-scroll" : "hidden" }  key={index}>
                <p>&quot;{j.content}&quot;</p>
                <p className="text-yellow-300 font-bold mt-2 ml-2 ">- {j.client}</p>
              </div>

              
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default Testimonials