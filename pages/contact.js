
import Head from "next/head"
function Contact() {
  return (
    <div className='flex justify-center items-center pt-28'>
      <Head>
        <title>Contact | Jake Warren</title>
      </Head>
      <div className='flex flex-col text-center'>
        <h2 className='uppercase font-bold text-3xl lg:text-6xl mb-4'>Contact Me</h2>
        <p>I&apos;m always open to hearing about new projects and taking on new clients!</p>
        <div className='flex flex-col bg-[#fe734e] p-8 rounded-lg'>
          <form action="https://formsubmit.co/c0c81ab596c8c17ad3dcfe000a6ab308" method='POST' className='flex flex-col text-left gap-4'>
            <input type="hidden" name="_subject" value="Website contact form"/>
            <div className='flex flex-col'>
              <label>Name</label>
              <input type="text" required className='rounded outline-none text-black p-2'/>
            </div>
            <div className='flex flex-col'>
              <label>Email</label>
              <input type="email" name="email" required className='rounded outline-none text-black p-2'/>
            </div>
            <div className='flex flex-col'>
              <label>Message</label>
              <textarea type="text" name="message" rows={5} className='outline-none text-black p-2'/>
            </div>
            <button type="submit" className='bg-white text-black hover:scale-105 w-60 mx-auto ease-in-out duration-300 font-bold uppercase rounded py-4 px-5'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact