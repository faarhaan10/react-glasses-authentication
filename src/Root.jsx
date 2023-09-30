
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  )
}


export default Root
