import React from 'react'

function Contact() {
  return (
    <div className='flex justify-center items-center pt-28'>
      <div className='flex flex-col text-center'>
        <h2 className='uppercase font-bold text-6xl mb-4'>Contact Me</h2>
        <p>I'm always open to hearing about new projects and taking on new clients!</p>
        <div className='flex flex-col bg-[#fe734e] p-8 rounded-lg'>
          <form id="form" className='flex flex-col text-left gap-4'>
            <div className='flex flex-col'>
              <label>Name</label>
              <input className='rounded outline-none text-black p-2'/>
            </div>
            <div className='flex flex-col'>
              <label>Email</label>
              <input className='rounded outline-none text-black p-2'/>
            </div>
            <div className='flex flex-col'>
              <label>Message</label>
              <textarea rows={5} className='outline-none text-black p-2'/>
            </div>
            <button className='bg-white text-black hover:scale-105 w-60 mx-auto ease-in-out duration-300 font-bold uppercase rounded py-4 px-5'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact