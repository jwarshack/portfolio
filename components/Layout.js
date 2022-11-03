import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>
          <main className='flex flex-col flex-1 text-primary'>{children}</main>
        <Footer/>
    </div>
  )
}

export default Layout