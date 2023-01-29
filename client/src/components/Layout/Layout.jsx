import React from 'react'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AllRouter from '../../routes/AllRouter'

const Layout = () => {
  return (
    <div>
      <Header/>
      <AllRouter/>
      <Footer/>
    </div>
  )
}

export default Layout