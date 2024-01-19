import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './compnoent/Header/Header'
import Footer from './compnoent/Footer/Footer'

function Layout() {
  return (
    <>
   <Link to = '/'>Home</Link>

   <Link to = '/OurScience'>OurScience</Link>

   <Link to = '/team'>Team</Link>


    </>
  )
}

export default Layout