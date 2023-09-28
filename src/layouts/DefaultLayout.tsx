import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../components'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
