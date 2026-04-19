import React from 'react'
import Navber from '../Navber/Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Home/Footer'

function Main() {
  return (
    <div >
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Main